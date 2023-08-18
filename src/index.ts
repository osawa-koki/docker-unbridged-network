import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const SCHEME = process.env.SCHEME!
const PORT = process.env.PORT!

const HOST = process.env.ACCESS_HOST_NETWORK?.toUpperCase() === 'TRUE'
  ? (() => {
      // `/etc/hosts`からホストのIPアドレスを取得する。
      // 一番最後のIPアドレスを取得して、最後の数字を1に置き換える。
      const etcHostFilePath = '/etc/hosts'
      const etcHostFile = fs.readFileSync(etcHostFilePath, 'utf-8')!
      const ipRegex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g
      const ips = etcHostFile.match(ipRegex)!
      const finalIp = ips[ips.length - 1]
      const HOST = finalIp.replace(/\d+$/, '1')
      return HOST
    })()
  : process.env.HOST!

const endpoint = `${SCHEME}://${HOST}:${PORT}`
console.log(`endpoint: ${endpoint}`)

/* eslint-enable @typescript-eslint/no-non-null-assertion */

console.log(`endpoint: ${endpoint}`)
fetch(`${SCHEME}://${HOST}:${PORT}`)
  .then(async (res) => await res.text())
  .then((text) => {
    console.log(text)
  })
  .catch((err: unknown) => {
    if (err instanceof Error) {
      console.error(err.stack)
    } else {
      console.error(err)
    }
  })
