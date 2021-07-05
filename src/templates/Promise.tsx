import * as React from "react";

/*
<Promise on={fetchTodo}>
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
*/

// @ts-ignore
export default function Promise({ on, children }) {
    const [pending, setPending] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        on()
            .then((data: any) => setData(data))
            .catch((error: any) => setError(error))
            .finally(() => setPending(false));
    }, [on]);

    const {
        type: ResolveComponent,
        props: { children: ResolveChild }
    } = children[1];

    const {
        type: RejectComponent,
        props: { children: RejectChild }
    } = children[2];

    return (
        <>
            {pending && children[0]}
            {!pending && data && (
                <ResolveComponent data={data} children={ResolveChild}></ResolveComponent>
            )}
            {!pending && error && (
                <RejectComponent error={error} children={RejectChild}></RejectComponent>
            )}
        </>
    );
}

