import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Navbar from './Navbar'

describe('Feature1Page', () => {
    it('renders the text "Feature 1" exactly once', () => {
        render(<Navbar />)
        expect(screen.getAllByText('Navbar')).toHaveLength(1)
    })
})
