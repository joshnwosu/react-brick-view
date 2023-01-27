import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { BrickView } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <BrickView>
        <div>Hello</div>
      </BrickView>,
    )
  })
})
