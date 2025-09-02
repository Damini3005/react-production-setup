import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Feature2Page from './Feature2Page'

describe('Feature1Page', () => {
    it('renders Page', () => {
        render(<Feature2Page />)

        expect(screen.getAllByText('Feature 2 Page')).toHaveLength(1)
    })
})
