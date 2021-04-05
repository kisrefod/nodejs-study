import * as dotenv from 'dotenv';

dotenv.config();

const innerHost:string = process.env.HOST || 'localhost';
const strPort:string = process.env.PORT || '1337';
const innerPort:number = parseInt(strPort, 10);

export default { host: innerHost, port: innerPort };
export const config = { host: innerHost, port: innerPort };
export const host:string = innerHost;
export const port:number = innerPort;

export const owner:string = `/users/${process.env.OWNER || 'kisrefod'}`;
export const repo:string = process.env.REPO || 'Kisrefod-Training/nodejs-study';
export const token:string = process.env.TOKEN || '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';

