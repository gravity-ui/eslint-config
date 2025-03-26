import * as React from 'react';

export function TestComponent() {
    const [a, setA] = React.useState([1, 2, 3]);

    if (a.length > 5) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [b, setB] = React.useState();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useEffect(() => {
            setB(Math.random());
        }, [b]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const c = React.useCallback(() => {
        setA([2, 4, 5]);
    });

    React.useEffect(() => {
        c();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {a.map((v) => (
                // eslint-disable-next-line react/jsx-key
                <span>{v}</span>
            ))}
        </div>
    );
}
