import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

function HelloWorld() {
  return <h1>Hello, World!</h1>
}

describe('HelloWorld Component', () => {
  it('renders correctly', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })
})
