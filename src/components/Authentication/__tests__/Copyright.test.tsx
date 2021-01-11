import React from 'react';
import { render } from '@testing-library/react';
import Copyright from '../Copyright';

it('should render copyright component', () => {
    const { getByText } = render(<Copyright />);

    expect(getByText('Work Logger')).not.toBeNull();
});
