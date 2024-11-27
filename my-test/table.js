import assert from 'node:assert/strict'
import test from 'node:test'
import {h} from 'hastscript'
import {toHast} from '@jay.kou/mdast-util-to-hast'

test('table', async function (t) {
  await t.test('should remove wrap node ', async function () {
    assert.deepEqual(
      toHast({
        type: 'root',
        children: [
          {
            type: 'table',
            children: [
              {
                type: 'tableRow',
                children: [
                  {
                    type: 'tableCell',
                    children: [
                      {
                        type: 'text',
                        value: 'h'
                      }
                    ]
                  }
                ]
              },
              {
                type: 'tableRow',
                children: [
                  {
                    type: 'tableCell',
                    children: [
                      {
                        type: 'text',
                        value: 'one'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }),
      h(null, [
        h('table', [
          h('thead', [h('tr', [h('th', 'h')])]),
          h('tbody', [h('tr', [h('td', 'one')])])
        ])
      ])
    )
  })
})
