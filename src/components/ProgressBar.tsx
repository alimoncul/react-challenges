const ProgressBar = (props: { percentage: number }) => {
    return (
        <div style={{
            height: 20,
            width: '100%',
            backgroundColor: "#e0e0de",
            borderRadius: 50,
            margin: 50,
        }}>
            <div style={{
                width: `${props.percentage}%`,
                height: '100%',
                backgroundColor: "#FFFFFF",
                borderRadius: 'inherit',
                textAlign: 'right'
            }}>
                <span style={{
                    padding: 5,
                    color: 'white',
                    fontWeight: 'bold'
                }}>{`${props.percentage}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;