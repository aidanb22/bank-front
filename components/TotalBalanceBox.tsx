"use client"; // Directive to mark this as a client-side component in Next.js


import AnimatedCounter from "@/components/AnimatedCounter"; // Custom animated counter component
import DoughnutChart from "@/components/DoughnutChart"; // Chart component to visualize account balances


const TotalBalanceBox = ({
                             accounts = [], // Default value: empty array
                             totalBanks,
                             totalCurrentBalance,
                         }: TotalBalanceBoxProps) => {
    return (
        <section className="total-balance">
            {/* Visualization of account balances */}
            <div className="total-balance-chart">
                {/* Doughnut chart displaying the proportion of balances per account */}
                <DoughnutChart accounts={accounts} />
            </div>

            {/* Summary details about the user's bank accounts */}
            <div className="flex flex-col gap-6">
                {/* Displays the total number of linked bank accounts */}
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>

                {/* Displays the total balance across all accounts */}
                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">Total Current Balance:</p>
                    <div className="total-balance-amount flex-center gap-2">
                        {/* Animated counter for a smooth numeric increment effect */}
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TotalBalanceBox;
