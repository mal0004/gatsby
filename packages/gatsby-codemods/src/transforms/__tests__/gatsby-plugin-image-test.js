const tests = [
  `baseline`,
  `call-expression`,
  `compat`,
  `ignore`,
  `multiple`,
  `placeholders`,
  `transform-error`,
  `extends-warn`,
  `not-data`,
  `no-query-change`,
  `variable`,
  `uses-src`,
  `not-object`,
  `mansion`,
  `non-component`,
  `stunted-ref`,
  `optional-chaining`,
  `styled`,
]

const defineTest = require(`jscodeshift/dist/testUtils`).defineTest

describe(`codemods`, () => {
  tests.forEach(test =>
    defineTest(
      __dirname,
      `gatsby-plugin-image`,
      null,
      `gatsby-plugin-image/${test}`
    )
  )
  defineTest(
    __dirname,
    `gatsby-plugin-image`,
    null,
    `gatsby-plugin-image/typescript`,
    { parser: `tsx` }
  )
})
