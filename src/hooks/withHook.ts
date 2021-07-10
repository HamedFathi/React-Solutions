/*
// LOGIC
// Outside props goes here first to be transformed according to Component's logic

export const useComponentState = props => {
  const { disabled } = props;

  const [loggedIn, setLoggedIn] = React.useState(initialLoggedIn);

  const onLogInButtonClick = () => {
    if (!disabled) {
      setLoggedIn(true);
    }
  };

  const onLogOutButtonClick = () => {
    if (!disabled) {
      setLoggedIn(false);    
    }
  };

  const hasLogInButton = !loggedIn;

  const hasLogOutButton = loggedIn;

  return {
    hasLogInButton,
    hasLogOutButton,
    onLogInButtonClick,
    onLogOutButtonClick
  };
};

// VIEW
// Props recieved from useComponentState hook

export const ComponentView = (props) => {
  const {
    hasLogInButton,
    hasLogOutButton,
    handleLogInButtonClick,
    handleLogOutButtonClick
  } = props;
  
  return (
    <header>
      {
        hasLogInButton && (
          <LogInButton onClick={handleLogInButtonClick}/>
        )
      }
      {
        hasLogOutButton && (
          <LogOutButton onClick={handleLogOutButtonClick}/>
        )
      }
    </header>
  )
}

// COMBINATION
// Use withHook HOC to connect Component's state to Component's view

import { withHook } from './withHook'
import { useComponentState } from './useComponentState'
import { ComponentView } from './ComponentView'

export const Component = withHook(useComponentState, ComponentView);

// USAGE
// Component usage example

import { Component } from './Component'

const Parent = () => (
  <Component disabled />
)
*/

type TReturnType<T1> = (props: T1) => React.ReactNode;

export const withHook = <T1, T2>(
    // your logic hook
    hook: (p: T1) => T2,
    // your view
    view: (p: T2) => React.ReactNode
): TReturnType<T1> => {
    return props => {
        return view(hook(props));
    };
};