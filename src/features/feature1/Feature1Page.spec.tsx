import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Feature1Page from './Feature1Page'

describe('Feature1Page', () => {
    it('renders the text "Feature 1" exactly once', () => {
        render(<Feature1Page />)
        // getAllByText returns an array of all matching elements
        const elements = screen.getAllByText('Feature 1 Page')
        expect(elements).toHaveLength(1) // ✅ asserts exactly one occurrence
    })
})
