import {describe, expect, test} from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react'
import Footer from '@/components/footer/Footer';



describe('Footer tests', () => {

  test('Renders footer element', () => {
    render(<Footer />);
    waitFor(() => expect(screen.getByTestId('test-footer')).toBeInTheDocument());
  });

});