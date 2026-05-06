import { render, screen, fireEvent } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders the brand name', () => {
    render(<Nav />)
    expect(screen.getByText('Golden Relax')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Reviews' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Location' })).toBeInTheDocument()
  })

  it('mobile menu is hidden by default', () => {
    render(<Nav />)
    expect(screen.queryByRole('navigation', { name: 'mobile menu' })).not.toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    render(<Nav />)
    const button = screen.getByLabelText('Toggle menu')
    fireEvent.click(button)
    expect(screen.getByRole('navigation', { name: 'mobile menu' })).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.queryByRole('navigation', { name: 'mobile menu' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Nav />)
    const button = screen.getByLabelText('Toggle menu')
    fireEvent.click(button)
    const mobileServicesLink = screen.getAllByRole('link', { name: 'Services' })[1]
    fireEvent.click(mobileServicesLink)
    expect(screen.queryByRole('navigation', { name: 'mobile menu' })).not.toBeInTheDocument()
  })
})
