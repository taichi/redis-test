import { default as Redis } from "ioredis";
const redis = new Redis();

async function main() {
  console.log("aaaa");
  await redis.set("foo", "bar", "EX", 300);
  const bar = await redis.get("foo");
  console.log(bar);
  await redis.del("foo");
  const b2 = await redis.get("foo");
  console.log(b2);
}

Promise.all([main()]).catch((err: Error) => {
  // tslint:disable-next-line: no-console
  console.error(err);
}).finally(() => {
  console.log("END");
});
