import { useEffect, useState } from "react";
import { Cell, Label, Legend, Pie, PieChart } from "recharts";
import PropTypes from 'prop-types';

const CustomLegend = ({ payload }) => {
    return (
        <div className="flex items-center place-content-center justify-center gap-6">
            {payload.map((entry, index) => (
                <div key={`legend-${index}`} style={{ display: "flex", alignItems: "center", justifyItems: "center", gap: "10px" }}>
                    <span style={{ marginLeft: "5px" }}>{entry.value}</span>
                    <div style={{ width: "60px", height: "12px", backgroundColor: entry.color, borderRadius: '2px' }}></div>
                </div>
            ))}
        </div>
    );
};

const Statistics = () => {

    const [donations, setDonations] = useState([]);
    const totalDonations = 12;

    // load data from local storage
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donation-item'));
        if (donatedItems) {
            setDonations(donatedItems);
        }
    }, []);

    // console.log(donations);

    const receivedDonations = donations.length;

    const data = [
        { name: "Your Donations", value: receivedDonations },
        { name: "Total Donations", value: totalDonations - receivedDonations },
    ];

    const colors = ["#00c49f", "#ff444a"];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div className="flex mx-auto justify-center items-center">
            <div>
                <PieChart width={500} height={400}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={110}
                        fill="#8884d8"
                        labelLine={false}
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                        <Label content={renderCustomizedLabel} />
                    </Pie>
                    {/* <Tooltip /> */}
                    <Legend content={<CustomLegend />} />
                </PieChart>
            </div>
        </div>
    );
};

CustomLegend.propTypes = {
    payload: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Statistics;