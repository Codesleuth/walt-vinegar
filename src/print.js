import compile from './walt/print.walt'

export default async function print(str) {
  const memory = new WebAssembly.Memory({ initial: 100, limit: 1000 })
  const view = new DataView(memory.buffer)

  const len = str.length
  for (let i = 0, c = len; i < c; i++) {
    const code = str.charCodeAt(i)
    view.setUint32(i, code, true)
  }

  const counter = await compile({
    'global': {},
    'env': {
      'memory': memory,
      'table': new WebAssembly.Table({ initial: 0, element: 'anyfunc' }),
      log(val) {
        console.log(String.fromCharCode(val));
      }
    }
  })

  counter.instance.exports.print(len)
}
