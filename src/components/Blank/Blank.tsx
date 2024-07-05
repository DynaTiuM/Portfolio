interface BlankProps {
    marginTopValue: number;
}

export default function Blank({ marginTopValue }: BlankProps): JSX.Element {
    return <div style={{ marginTop: `${marginTopValue}px` }}></div>;
}
