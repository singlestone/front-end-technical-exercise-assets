import { serializeSteps } from '../serializers'
const rawSteps = require('./rawSteps.json')

describe('serializeSteps()', () => {
  let serializedSteps = serializeSteps(rawSteps)

  it('sorts steps by `stepNumber`', () => {
    expect(serializedSteps.length).toBe(4)
    expect(serializedSteps[0].stepNumber).toBe('1')
    expect(serializedSteps[1].stepNumber).toBe('2')
    expect(serializedSteps[2].stepNumber).toBe('3')
    expect(serializedSteps[3].stepNumber).toBe('4')
  })

  it('finds the latest version for each step', () => {
    expect(serializedSteps[0].effectiveDate).toBe('2019-05-20T03:04:05.000Z')
    expect(serializedSteps[1].effectiveDate).toBe('2019-05-04T03:04:05.000Z')
    expect(serializedSteps[2].effectiveDate).toBe('2019-04-04T05:04:05.000Z')
    expect(serializedSteps[3].effectiveDate).toBe('2019-05-20T03:04:05.000Z')
  })

  it('does not include extraneous data in the result array', () => {
    expect(serializedSteps[0]).not.toHaveProperty('versionContent')
    expect(serializedSteps[1]).not.toHaveProperty('versionContent')
    expect(serializedSteps[2]).not.toHaveProperty('versionContent')
    expect(serializedSteps[3]).not.toHaveProperty('versionContent')
  })
})
