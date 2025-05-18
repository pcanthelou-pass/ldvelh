import { render, screen, userEvent } from '@testing-library/react-native';
import { ChooseStoryView } from '../ChooseSimpleStoryView';

describe('<ChooseStoryView></ChooseStoryView>', () => {
  it('should display the component with texts', () => {
    render(<ChooseStoryView title="title" description="description" />);
    expect(screen.getByText(/title/i)).toBeVisible();
    expect(screen.getByText(/description/i)).toBeVisible();
  });
  it('should have a button Entrer to go to the next step', async () => {
    const user = userEvent.setup();
    const onPressFn = jest.fn();
    const onPress = () => {
      onPressFn();
    };

    render(
      <ChooseStoryView
        title="title"
        description="description"
        onPress={onPress}
      />
    );
    expect(screen.getByText(/entrer/i)).toBeVisible();
    await user.press(screen.getByText(/entrer/i));
    expect(onPressFn).toHaveBeenCalledTimes(1);
  });
});
