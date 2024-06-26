export default function Page() {
    return(
            <>
            <title>Neural Network Visualization</title>
            <body>
            <svg id="network">
                <line className="connection" x1="50" y1="50" x2="150" y2="100"/>
                <line className="connection" x1="150" y1="100" x2="250" y2="150"/>
                <div className="neuron"></div>
                <div className="neuron" ></div>
                <div className="neuron"></div>
            </svg>
            </body>
            </>
    );
}