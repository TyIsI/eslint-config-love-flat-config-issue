export default 'test'

export function generateTestMessages(max?: number) {
  max = max ?? 256

  for (var i = 0; i < max; i++) {
    console.log('message:', i)
  }
}
