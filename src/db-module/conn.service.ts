import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ServerApiVersion } from 'mongodb';
import { MongoClient } from 'mongodb';

@Injectable()
export class DbConnectService {
  private conn!: MongoClient | null;
  private logger = new Logger('Database');

  async onModuleInit() {
    if (this.conn) return this.db;

    this.logger.log('connecting to database...');

    const url = process.env['DB_URL'];

    if (!url) throw 'db url was not found';

    this.conn = await new MongoClient(url, {
      serverApi: ServerApiVersion.v1,
    }).connect();

    this.logger.log('connected to database successfully');

    process
      .once('exit', () => this.closeConn())
      .once('SIGTERM', () => this.closeConn())
      .once('SIGINT', () => this.closeConn());

    return this.db;
  }

  onApplicationShutdown() {
    this.closeConn();
  }

  private closeConn() {
    if (this.conn) {
      this.logger.log('closing db connection');
      this.conn.close();
      this.conn = null;
    }
  }

  get db() {
    if (!this.conn) throw 'database not connected';

    return this.conn.db('playground');
  }
}
