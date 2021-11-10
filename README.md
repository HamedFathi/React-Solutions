![react](https://user-images.githubusercontent.com/8418700/141211476-ea912bba-447c-4ec5-a935-0f07ddf83d0f.png)


A bunch of useful React components, hooks, and helpers. I tried to bring other JS frameworks template syntax to React ecosystem.

## How to install it?

```bash
npm i react-solutions

yarn add react-solutions
```

<hr/>

## Components

#### If/Else

If your condition returns `true`, then the `If` block renders your content.

```js
<If condition={YOUR_CONDITION}>
    CONTENT
</If>
```

If your condition returns `false`, then the `IfNot` block renders your content.

```js
<IfNot condition={YOUR_CONDITION}>
    CONTENTS
</IfNot>
```

#### Switch/Case

If you need a `Switch` component, you can use it as following.

```js
let switcher = 'red';

<Switch on={switcher}>
  {/* This Case will render as the value matches the Switch's {on} prop */}
  <Case value="red">
    <p>Rendering the red case</p>
  </Case>
  <Case value="blue">
    <p>Rendering the blue case</p>
  </Case>
</Switch>;

// A Default Component is optional with a Switch block, if no Default is provided and
// no Case(s) match then the Switch will render null

switcher = 'green';

<Switch on={switcher}>
  <Case value="red">
    <p>Rendering the red case</p>
  </Case>
  <Case value="blue">
    <p>Rendering the blue case</p>
  </Case>
  <Default>
    {/* The Default will render as no value matches the Switch's {on} prop */}
    <p>Im what renders by default!</p>
  </Default>
</Switch>;

// Case(s) can be given an array of values as well which will all be taken into account when searching for a match in the Switch

switcher = 'yellow';

<Switch on={switcher}>
  <Case value="red">
    <p>Rendering the red case</p>
  </Case>
  <Case value={['green', 'yellow', 'blue']}>
    {/* This Case will render as one of the values match the Switch's {on} prop */}
    <p>Rendering the green, yellow and blue case</p>
  </Case>
  <Case value="blue">
    {/* fun fact! This will never render as blue is already apart of a previous Case */}
    <p>Rendering the blue case</p>
  </Case>
  <Default>
    <p>Im what renders by default!</p>
  </Default>
</Switch>;
```

#### Show/Hide

If your condition returns `true`, then the `Show` block shows your content. (`display: visible`)

```js
<Show condition={YOUR_CONDITION} tag="div">
    CONTENT
</Show>
```

If your condition returns `true`, the `Hide` block hides your content. (`display: none`)

```js
<Hide condition={YOUR_CONDITION} tag="div">
    CONTENT
</Hide>
```

* `tag` wraps your content to show or hide it. the default is `span`.

#### Repeat

If you are looking for a `Repeat` component, it is for you!

```js
<Repeat for={[1, 2, 3]}>
  {({ item, index }) => (
    <React.Fragment>
      <div>--- {item}</div>
      <Repeat for={[4, 5, 6]}>
        {({ item, index, length }) => (
          <>
            <div>------- {item}</div>
            <Repeat for={[7, 8, 9]}>
              {({ item, index, length, array }) => (
                <div>------------ {item}</div>
              )}
            </Repeat>
          </>
        )}
      </Repeat>
    </React.Fragment>
  )}
</Repeat>
```    

* `item`   : the current value.
* `index`  : the index of the value in the array.
* `length` : the length of the array.
* `array`  : the whole array.

The order of the parameters is important.

#### Try/Catch

`TryCatch` is intended to reduce boilerplate with handling errors that occur with rendering.

```js
const renderComponentWithAPICallFailure = () => <SudoCode />;

<TryCatch
  try={renderComponentWithAPICallFailure}
  catch={(error) => (
    <span>
      An error has occurred! {error}
    </span>
  )}
/>;

// or without a catch. This will result in an error being thrown by the TryCatch component.
// It's best to provide a custom catch so you can do whatever specific logic you need to should something unexpected happen
<TryCatch try={renderComponentWithAPICallFailure} />;
```

#### Promise/Async

`Promise` component helps you to use promise (async) functions easier than before.

```js
<Promise on={fetchData}>
  <Pending>
    <h1>Loading...</h1>
  </Pending>
  <Resolve>
    {(data) => {
      return (
        <div>
          <h1>Data Received</h1>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
      );
    }}
  </Resolve>
  <Reject>
    {(error) => {
      return (
        <div>
          <h1>Error Generated</h1>
          <pre>{JSON.stringify(error, null, 4)}</pre>
        </div>
      );
    }}
  </Reject>
</Promise>
```

* `Pending` : Initial state, neither fulfilled (resolved) nor rejected.
* `Resolve` : The operation was completed successfully.
* `Reject`  : The operation failed.


<hr/>

## Hooks

#### useDebounce

this hooks forces a function to wait a certain amount of time (millisecond) before running again.

```js
const [term, setTerm] = useState('');
useDebounce(()=> {
  console.log(term); // debounced 1sec
  // call search api ...
  // return () => maybe cancel prev req 
}, 1000 ,[term]);
```

#### useThrottle

This hook ensures that a function is called at most once in a specified time period (millisecond).

```js
const [count, setCount] = useState(0);
useThrottle(() => { console.log(count); }, 1000, [count]);
```
