const allTests = {
    test1: [
        { 
            q: "On which of these small savings product can an investor have a tax benefit on the interest income earned?", 
            o: ["National Savings Certificate", "Kisan Vikas Patra", "Post Office Time Deposit", "All of the above"], 
            a: "National Savings Certificate", 
            e: "Investments made in the NSC VIII issue enjoy tax benefits under section 80C. Accrued interest is taxable, but is deemed to be reinvested and therefore the interest becomes eligible for Section 80C benefits." 
        },
        { 
            q: "A person is investing in shares whose market prices are lower than their book value. This style of investing is generally known as ________ .", 
            o: ["Stock Picking", "Conservative Investing", "Growth Investing", "Value Investing"], 
            a: "Value Investing", 
            e: "Value investing is an investment strategy that involves picking stocks that appear to be trading for less than their intrinsic or book value." 
        },
        { 
            q: "Bond A carries an interest rate of 9%. Interest rates in the economy for such similar bonds increase to 9.5%. Other things remaining the same, the price of Bond A in secondary market will ________ .", 
            o: ["increase", "decrease", "remain unchanged", "Cannot predict"], 
            a: "decrease", 
            e: "The price of the bonds in the secondary market will respond to changes in interest rates. An increase in interest rates sees the price of existing bonds depreciate and vice versa." 
        },
        { 
            q: "In the New Fund Offer (NFO) of a Mutual Fund, the units are offered at ________ .", 
            o: ["Net Asset Value (NAV)", "Market Value", "Face Value", "None of the above"], 
            a: "Face Value", 
            e: "Allotment of units in a Mutual Fund NFO are at the issue price which is typically at the face value of the units." 
        },
        { 
            q: "Which of these compliant(s) cannot be addressed on SCORES?", 
            o: ["Complaints in respect of unlisted companies", "Complaints which are sub-judice", "Complaints in respect of insurance products or companies", "All of the above"], 
            a: "All of the above", 
            e: "SCORES is the online investor redressal mechanism set up by SEBI. It does not deal with complaints against unlisted/delisted companies, sub-judice matters, or sectors like insurance which are regulated by IRDAI." 
        },
        { 
            q: "Mr. Sumeet invested Rs 5000 in a Mutual Fund on 1 Jan 2020 and when he redeemed on 31 Dec 2021 he got Rs 12000. Calculate the CAGR.", 
            o: ["54.90%", "69.75%", "70.80%", "125%"], 
            a: "54.90%", 
            e: "The number of years from 1 Jan 20 to 31 Dec 2021 = 2 years. CAGR = { Ending Value / Begining Value } ^ ( 1 / No. of years) - 1. { 12000 / 5000 } ^ 1/2 - 1 = 2.4 ^ 0.5 - 1 = 1.549 - 1 = 54.90%." 
        },
        { 
            q: "To have better clarity in the Investment Policy Document, the goals of the investor should be categorised on the basis of ________ .", 
            o: ["Risk and Returns", "Time period and Priority", "Returns and Time period", "Time priority and Returns"], 
            a: "Time period and Priority", 
            e: "The Investment policy document would normally list out the goals of the investor along with their priorities and time horizons." 
        },
        { 
            q: "Which of these is TRUE with respect to liquidity in a solution-oriented mutual fund scheme?", 
            o: ["Solution-oriented mutual fund schemes are close-end funds and can be traded on a stock exchange", "Solution-oriented mutual fund schemes are open-end funds and can be easily sold and purchased", "Solution-oriented mutual fund schemes can only be purchased during a NFO and are locked in for the entire term", "Solution-oriented mutual fund schemes have a lock-in of 5 years"], 
            a: "Solution-oriented mutual fund schemes have a lock-in of 5 years", 
            e: "Retirement and Children's Funds are schemes oriented towards specific saving needs and have a lock-in of 5 years or until the specified age is reached." 
        },
        { 
            q: "Identify the securities which can be dematerialized as per Indian regulations?", 
            o: ["Unlisted securities", "Equity Shares", "Government securities", "All of the above"], 
            a: "All of the above", 
            e: "Under the SEBI Regulations of 1996, shares, scrips, stocks, bonds, debentures, mutual fund units, government securities, and unlisted securities are all eligible for dematerialisation." 
        },
        { 
            q: "Identify which of these is a part of the Code of Conduct prescribed for intermediaries under the SEBI (Intermediaries) Regulations?", 
            o: ["Intermediary responsible for acts of employees", "Fees charged will be in line with industry", "Client confidentiality must be maintained", "All of the above"], 
            a: "All of the above", 
            e: "The Code of Conduct ensures intermediaries are held accountable for staff acts, charge fair fees, and do not disclose client information without consent except when required by law." 
        },
        { 
            q: "The Modern Portfolio Theory uses Expected Returns, Standard deviation of asset classes and ________ to create an optimal portfolio.", 
            o: ["Expected market performance", "Portfolio variance", "Correlation Coefficient of the Asset classes", "All of the above"], 
            a: "Correlation Coefficient of the Asset classes", 
            e: "MPT balanced risk and return using expected returns, standard deviation, and the correlation coefficient between asset classes." 
        },
        { 
            q: "Identify the TRUE statement with respect to lock-in period in children's funds.", 
            o: ["Units locked in for 5 years or tenor of scheme", "Units locked in for 5 years or till age of majority", "Units locked in for 5-10 years", "Units locked in for 5 years before majority"], 
            a: "Units locked in for 5 years or till age of majority", 
            e: "Children's Fund schemes have a lock-in of 5 years or till the age of majority, whichever is earlier." 
        },
        { 
            q: "For which category of goals can an investor consider a high yield credit risk fund?", 
            o: ["Near term goals which have a high priority", "Near term goals which have a low priority", "Long term goals which have a high priority", "All of the above"], 
            a: "Near term goals which have a low priority", 
            e: "More-aggressive investment approaches like high yield credit risk funds are usually taken for low priority goals that are not painful if not achieved." 
        },
        { 
            q: "________ fall within the ambit of Financial Planning.", 
            o: ["Investments in retirement", "Savings in retirement", "Large unexpected expenses", "All of the above"], 
            a: "All of the above", 
            e: "Financial planning encompasses a broad range of activities including planning for retirement investments, savings, and preparing for large unexpected expenses." 
        },
        { 
            q: "Identify the true statement(s) about Risk? A. Semi Variance is quite an accurate measure of risk B. Downside risk is concerned about worse than expected return", 
            o: ["Only A", "Only B", "Both A and B", "Neither A nor B"], 
            a: "Both A and B", 
            e: "Risk can be defined as variability in expected return (total risk) or limited to outcomes worse than expected (downside risk), which includes concepts like semi-variance." 
        },
        { 
            q: "In case of Exchange Traded Funds (ETFs), what is the minimum investment in securities of the index which is being tracked as a percent of total assets.", 
            o: ["80%", "85%", "90%", "95%"], 
            a: "95%", 
            e: "At least 95% of the total assets of an ETF should be in securities represented in the index being tracked." 
        },
        { 
            q: "Identify the CORRECT statement.", 
            o: ["Sortino ratio is excess returns per unit downside risk", "Sharpe ratio multiplied by downside risk is Sortino", "Sortino and Sharpe measures the same returns", "Sortino is excess returns per unit of total risk"], 
            a: "Sortino ratio is excess returns per unit downside risk", 
            e: "The Sortino Ratio adjusts a portfolio's excess return to the downside risk by dividing excess return by the semi-standard deviation." 
        },
        { 
            q: "What is the reason which increases the potential of big losses in a derivative product?", 
            o: ["Derivatives are high cost products", "Derivatives are leveraged products", "Derivatives are complex products", "Derivatives are low liquidity products"], 
            a: "Derivatives are leveraged products", 
            e: "By leveraging, investors can control large positions for a small amount paid as margins, which allows for high returns but also higher potential losses." 
        },
        { 
            q: "A person has lodged a complaint against an entity on SCORES. The concerned entity is required to respond to this complaint within ________ .", 
            o: ["10 days", "15 days", "21 days", "30 days"], 
            a: "21 days", 
            e: "Under SCORES 2.0, the entity is required to respond and submit an Action Taken Report (ATR) within 21 calendar days of receiving the complaint." 
        },
        { 
            q: "The investment objective of Ms. Meeta is to have a regular income. She approaches a PMS firm for this purpose. Among the given four choices, which will be the preferred choice of the portfolio manager?", 
            o: ["Small and Mid cap equity shares", "New IPO's", "Zero coupon bonds", "Dividend paying equity shares"], 
            a: "Dividend paying equity shares", 
            e: "If regular income is the objective, funds will be invested in asset classes generating periodical income like dividend paying stocks or interest paying bonds." 
        },
        { 
            q: "Which of the following statement is TRUE with respect to change in nomination?", 
            o: ["Nomination once made cannot be changed", "Only the first holder can sign the change", "All joint holders must authorise the change", "Existing nomination must be cancelled first"], 
            a: "All joint holders must authorise the change", 
            e: "Nomination can be changed or cancelled at any time, but all joint holders must sign to authorize the action." 
        },
        { 
            q: "Which of these is pre-defined in an equity investment?", 
            o: ["Dividend Yield", "Frequency of Return", "Level of Return", "Type of Return"], 
            a: "Type of Return", 
            e: "While returns are not guaranteed, the *type* of return—typically consisting of capital appreciation and dividends—is pre-defined." 
        },
        { 
            q: "A bank customer has made a complaint to the bank regarding an issue he had. The bank responded to his complaint but he was not satisfied with the response. To whom should he complain next?", 
            o: ["Bank Ombudsman", "Reserve Bank of India", "SEBI", "SCORES"], 
            a: "Bank Ombudsman", 
            e: "If a customer is not satisfied with a bank's internal redressal response, they can approach Banking Ombudsmen appointed by the RBI." 
        },
        { 
            q: "Identify what best describes the role of the intermediary and the investor while making an investment in a mutual fund?", 
            o: ["Distributor responsible for choice and execution", "Distributor helps choice, investor executes", "The registered investment advisor will assist in investment choices and the investor/distributor will execute the investments decisions", "Advisor responsible for advice and execution"], 
            a: "The registered investment advisor will assist in investment choices and the investor/distributor will execute the investments decisions", 
            e: "SEBI regulations specify that individual Investment advisers cannot undertake both advisory and distribution; they assist in choices while others handle execution." 
        },
        { 
            q: "How are Corporate Bonds primarily raised?", 
            o: ["Over the Counter", "By Public Issue", "By Private Placement", "By Auction"], 
            a: "By Private Placement", 
            e: "Typically, corporates issue debt papers like corporate bonds through 'Private Placement' to a select group of investors." 
        },
        { 
            q: "Identify which of these is NOT a method for a company to raise capital in the primary market?", 
            o: ["Offer For Sale (OFS)", "Private placement", "Qualified Institutional Placement (QIP)", "Rights Issue"], 
            a: "Offer For Sale (OFS)", 
            e: "OFS is when existing shareholders sell their shares to the public; since the company doesn't raise fresh capital, it is a secondary market transaction." 
        },
        { 
            q: "A person cannot register a complaint on SCORES against a/an ________ .", 
            o: ["Insurance Company", "Depository", "Venture Capital Fund", "Distributor of Mutual Fund"], 
            a: "Insurance Company", 
            e: "Insurance companies are regulated by IRDAI, not SEBI, and thus complaints against them are handled through IRDAI's IGMS system." 
        },
        { 
            q: "Identify the situation in which the geometric mean return from an investment will be less than its arithmetic mean return?", 
            o: ["Investment period is more than one year", "Investment period is one year", "Investment period is less than one year", "For all investment periods"], 
            a: "Investment period is more than one year", 
            e: "Over holding periods longer than one year, the geometric average return is always less than the arithmetic return unless all yearly returns are identical." 
        },
        { 
            q: "________ is not considered a part of Rebalancing cost.", 
            o: ["PMS fees payable", "Stamp duty levied", "Securities Transaction Tax (STT)", "Brokerage cost"], 
            a: "PMS fees payable", 
            e: "Rebalancing costs include transaction costs (brokerage) and tax costs (STT, Stamp duty), but not general PMS management fees." 
        },
        { 
            q: "If the investor is in 30% tax bracket, then 8.4% post-tax return is equivalent to ________ in pre-tax terms.", 
            o: ["13%", "14%", "12%", "15%"], 
            a: "12%", 
            e: "Pre tax returns = Post-tax return / (1 - tax rate). 0.084 / (1 - 0.3) = 0.084 / 0.7 = 12%." 
        },
        { 
            q: "The action of taking an opposite position in the future or options market to one's position in the equity segment is known as ________ .", 
            o: ["Hedging", "Arbitrage", "Speculation", "Over trading"], 
            a: "Hedging", 
            e: "Hedging involves using derivative markets to protect an open position in the underlying asset from future price movement risks." 
        },
        { 
            q: "Financial Planning also pertains to ________ .", 
            o: ["Income during retirement", "Expenses during retirement", "Budgeting during retirement", "All of the above"], 
            a: "All of the above", 
            e: "Retirement planning involves shifting focus to expenses, income adequacy from investments, and strategies to meet any shortfalls." 
        },
        { 
            q: "In which of these investment structures does the investor have NO say in the way his investments are managed?", 
            o: ["Discretionary portfolio management services", "Non-Discretionary portfolio management services"], 
            a: "Discretionary portfolio management services", 
            e: "In Discretionary PMS, the portfolio manager takes investment decisions on behalf of the client without needing individual approval for each transaction." 
        },
        { 
            q: "Sector specific risk can be reduced through the process of ________ .", 
            o: ["Remaining in most popular sector", "Diversification across sectors", "Changing sectors as trends change", "Including large and mid caps"], 
            a: "Diversification across sectors", 
            e: "Sector specific risk affects only businesses in a particular sector and can be diversified away by investing in different sectors." 
        },
        { 
            q: "In the avalanche mode of repayment of loan the amount paid first is the -", 
            o: ["Loan with highest amount", "Loan with lowest amount", "Loan with highest interest rate", "Loan with lowest interest rate"], 
            a: "Loan with highest interest rate", 
            e: "The avalanche strategy involves paying off the highest interest rate loans first to most efficiently bring down the total interest burden." 
        },
        { 
            q: "Mr. Pawar requires Rs.10 lakhs in six months' time for son's fees. An appropriate investment would be -", 
            o: ["Short term debt fund", "Equity shares", "Real estate", "Long term corporate bond"], 
            a: "Short term debt fund", 
            e: "For a short six-month horizon, equities and real estate are too risky; safe short-term debt funds are the correct option." 
        },
        { 
            q: "Rebalancing the portfolio has to be done -", 
            o: ["Daily", "At regular intervals", "Every decade", "Never"], 
            a: "At regular intervals", 
            e: "To keep a portfolio's original risk-and-return characteristics, it must be periodically rebalanced at regular intervals." 
        },
        { 
            q: "An AIF consists of ________ funds", 
            o: ["Lumpsum", "Mass market", "Limited", "Privately pooled"], 
            a: "Privately pooled", 
            e: "An Alternative Investment Fund (AIF) is primarily a privately pooled investment vehicle sourced from select investors." 
        },
        { 
            q: "One of the features of 'Art' is that there are no ________ .", 
            o: ["Standard products", "Art funds", "Sellers", "Art experts"], 
            a: "Standard products", 
            e: "Art is not a standard investment product as each work is unique and the market is unregulated." 
        },
        { 
            q: "An Investment Adviser has to preserve records for a minimum period of ________", 
            o: ["7 years", "5 years", "3 years", "10 years"], 
            a: "5 years", 
            e: "Investment advisers are required to maintain records in physical or electronic format for at least five years." 
        },
        { 
            q: "If an investor chooses to re-materialize their electronic demat securities, what is the effect?", 
            o: ["Continue in digital with different ISIN", "Permanently locked in depository", "Statement provided instead of certificates", "The depository debits the investor's account and issues fresh physical certificates"], 
            a: "The depository debits the investor's account and issues fresh physical certificates", 
            e: "Re-materialization converts electronic holdings back into physical share certificates by debiting the demat account and issuing fresh physical copies." 
        },
        { 
            q: "How should the benchmark chosen for a portfolio be managed?", 
            o: ["Change whenever holdings change", "Regularly reviewed for suitability", "Retained for entire duration", "Approved by regulators"], 
            a: "Regularly reviewed for suitability", 
            e: "Regular review ensures a benchmark remains aligned with the portfolio's strategy as market conditions and objectives change." 
        },
        { 
            q: "Fundamental analysis operates under key assumptions. Which is NOT one of these?", 
            o: ["Market values exhibit predictable patterns", "Actual value can differ from trading price", "Market price moves toward intrinsic value", "Helps identify undervalued stocks"], 
            a: "Market values exhibit predictable patterns", 
            e: "Predictable price patterns is an assumption of technical analysis, whereas fundamental analysis focuses on intrinsic health and value." 
        },
        { 
            q: "Which is NOT a responsibility of a portfolio manager?", 
            o: ["Gaining direct financial benefits from client funds", "Segregation of client securities", "Fiduciary accountability", "Timely resolution of concerns"], 
            a: "Gaining direct financial benefits from client funds", 
            e: "Portfolio managers must act in the best interest of the client; deriving direct benefits from client funds is unethical and violates fiduciary duties." 
        },
        { 
            q: "How is Risk Profiling utilized in the financial advising process?", 
            o: ["Conducted only once at start", "Reassessed for every new product", "Applied only if client agrees", "Regularly recorded and updated over time"], 
            a: "Regularly recorded and updated over time", 
            e: "Risk profiling is not a one-time activity; it must be documented and updated periodically to reflect changes in an investor's situation or market conditions." 
        },
        { 
            q: "A bond's coupon payment is calculated as a percentage of which value?", 
            o: ["Market value", "Face value", "Intrinsic value", "Redemption value"], 
            a: "Face value", 
            e: "The annual coupon payment is always expressed as a percentage of the bond's Face Value, regardless of market value fluctuations." 
        },
        { 
            q: "________ are the two costs which influence the Portfolio Rebalancing decisions.", 
            o: ["Taxes and General Expenses", "Bid Ask spreads and Taxes", "Transaction costs and Taxes", "Research and Transaction costs"], 
            a: "Transaction costs and Taxes", 
            e: "Deciding to rebalance involves trading off the cost of the action (transaction costs and tax costs like STT) versus the cost of inaction." 
        },
        { 
            q: "In which situation will dealing in securities be deemed NOT to be fraudulent?", 
            o: ["Buying, selling or pledging in physical/demat form", "Transacting without intention of performing", "Artificially inflating/depressing prices", "Inducing new investors with illiquid stock info"], 
            a: "Buying, selling or pledging in physical/demat form", 
            e: "Fraud involves acts committed to induce someone to deal in securities improperly; legal buying, selling, or pledging is not fraudulent." 
        },
        { 
            q: "A company announces a stock split, reducing the face value of its share from Rs 10 to Rs 2. Given that the market price before the split was Rs 1000, what will be the expected market price on the ex-date?", 
            o: ["Around Rs 1000", "Around Rs 500", "Around Rs 200", "No impact on market price"], 
            a: "Around Rs 200", 
            e: "A split from Rs 10 to Rs 2 is a 5-for-1 split; the price adjusts to Rs 200 (1000 / 5)." 
        },
        { 
            q: "To know the costs and fees associated with a PMS, an investor must read the ________ .", 
            o: ["Disclosure document", "Scheme offer document", "Scheme Information Document", "Fact Sheet"], 
            a: "Disclosure document", 
            e: "The Portfolio Manager is required to provide the client with a Disclosure Document detailing the range of fees charged for various services." 
        }
    ],
    test2: [
        { q: "The process of settling the obligations of buyer and seller in trade of securities is known as ________.", o: ["Clearing", "Settlement", "Trading", "Hedging"], a: "Settlement", e: "After the trade is executed on the secondary market, the buyer has a payment obligation and the seller has a delivery obligation. Settlement is the mechanism of settling the obligations of counter parties in a trade." },
        { q: "Who creates the Mutual Fund products?", o: ["Trustees", "Asset Management Company", "SEBI", "Sponsor"], a: "Asset Management Company", e: "Asset Management Companies are investment specialists who offer their services in selecting and managing a portfolio of securities. They create various products / schemes and offer them for investment." },
        { q: "What is the minimum return guaranteed under National pension system (NPS)?", o: ["7.5%", "8.25%", "As per current PF rates", "Returns are not guaranteed"], a: "Returns are not guaranteed", e: "Returns are not guaranteed under the NPS." },
        { q: "Identify the regulatory constraints for investors resident in India. A.Access to information that is not publicly known B.Investment in overseas markets", o: ["Only A", "Only B", "Both A and B", "Neither A nor B"], a: "Both A and B", e: "Investors are prohibited from trading on non-public information (Insider Trading) and face limits on overseas investments under the LRS scheme." },
        { q: "Who is considered as a 'Ward' under the Guardians and Wards Act?", o: ["All minors", "A minor with a guardian for person/property", "A minor with court-appointed guardian", "Any person with court guardian"], a: "A minor with a guardian for person/property", e: "A ward is specifically a minor for whom a guardian has been appointed for their person or property." },
        { q: "Which is true about the Execution-only model of offering financial services?", o: ["Identifying suitable products", "Providing products for diverse needs", "Charging a fee from investor", "All of the above"], a: "Providing products for diverse needs", e: "In an execution-only model, the intermediary's job is simply to offer a platform; the investor makes their own choices and no advice is given." },
        { q: "Alternative investments are used as an alternate source of capital by which identities?", o: ["Blue chip companies", "High promoter shareholding", "Working capital intensive businesses", "Businesses finding it difficult to tap traditional sources"], a: "Businesses finding it difficult to tap traditional sources", e: "AIFs provide capital to businesses that find it difficult to tap traditional sources of growth capital." },
        { q: "Which is an example of an investment decision for easing tax constraints? A. Investments in Sovereign Gold Bond scheme for asset allocation to gold B. Choosing the growth option along with Systematic Withdrawal Plan in a debt fund for regular income", o: ["Only A", "Only B", "Both A and B", "Neither A nor B"], a: "Only B", e: "Choosing growth options in debt funds can be more tax-efficient than receiving regular dividends." },
        { q: "The interest paid on ________ is re-set periodically as per the current inflation rates.", o: ["Junk Bonds", "Infrastructure Bonds", "Inflation Indexed Bonds", "Deep Discount Bonds"], a: "Inflation Indexed Bonds", e: "These bonds do not have a fixed rate; the interest changes based on inflation to protect real returns." },
        { q: "How are the payoffs in an options position for bullish and bearish markets?", o: ["The payoffs are Symmetrical", "The payoffs are Asymmetrical", "The payoffs are Random", "The payoffs are Elliptical"], a: "The payoffs are Asymmetrical", e: "Option contracts feature asymmetric pay-offs where upside and downside potential are not uniform." },
        { q: "The Stock Exchanges have daily price band for individual stocks at 2%, 5%, 10% or 20% depending on ________ .", o: ["Public and Private shareholding", "Price Levels", "Volatility", "All of the above"], a: "Volatility", e: "Stock exchanges impose price bands on individual securities to limit volatility in prices." },
        { q: "Once the New Fund Offer (NFO) closes, the open-ended mutual funds are ________ .", o: ["Available for purchase and sale only on the stock exchanges", "Not available for any further purchases", "Available for purchase only for the existing investors", "Available for purchase for both - new and existing investors"], a: "Available for purchase for both - new and existing investors", e: "After an NFO closes, open-ended funds allow both new and existing investors to buy units on an ongoing basis." },
        { q: "The coupon rate in a public issue of debentures ________ .", o: ["It is fixed by SEBI", "Is determined through a RBI auction", "Is determined through a book building process", "It is fixed by the stock exchange on which it will be listed"], a: "Is determined through a book building process", e: "The issuer, in consultation with lead managers, typically uses a book-building process to determine the coupon." },
        { q: "What type of derivatives are 'Forwards'?", o: ["Perpetual", "Exchange Traded", "Over The Counter (OTC)", "Standardised"], a: "Over The Counter (OTC)", e: "Forwards are private agreements traded directly between two parties, not on an exchange." },
        { q: "Diversification in a portfolio has the biggest impact on ________ .", o: ["Market risk", "Transactional risk", "Company specific risk", "All of the above"], a: "Company specific risk", e: "Company-specific (unsystematic) risk can be diversified away; market risk cannot." },
        { q: "Identify the TRUE statement with respect to information provided in the disclosure document of a portfolio management scheme (PMS).", o: ["Information in disclosure document depends on agreement", "Information specified by regulations", "Information specified by stock exchanges", "Information decided by each PMS provider"], a: "Information specified by regulations", e: "The Portfolio Manager is required by regulations to provide a Disclosure Document containing specified particulars." },
        { q: "Money market instruments have a maturity of ________ .", o: ["Less than 3 years", "Less than 1 year", "1 to 5 years", "Overnight only"], a: "Less than 1 year", e: "Money markets deal with short-term instruments with maturities of less than one year." },
        { q: "Which portfolio is the appropriate benchmark for comparison in the 'Peer Group' analysis method of performance evaluation ?", o: ["Mean values of portfolios", "Support percentile portfolio", "Median portfolio", "Average percentile portfolio"], a: "Median portfolio", e: "The median portfolio is the standard benchmark used in peer group universe analysis." },
        { q: "Which body creates sectoral indices for banking, pharma, etc.?", o: ["Ministry of Finance", "Stock Exchanges", "SEBI", "Ministry of Corporate Affairs"], a: "Stock Exchanges", e: "Sectoral indices are created by stock exchanges to allow tracking of specific industry sectors." },
        { q: "Identify which feature of a securities transaction provides it with regulatory jurisdiction of central government?", o: ["Monetary transaction", "Transaction between persons", "Transaction between individual entities", "All of the above"], a: "All of the above", e: "The SCRA gives the Central Government jurisdiction over stock exchanges and contracts in securities between persons." },
        { q: "On whom are the SEBI Anti-Money laundering guidelines applicable?", o: ["Intermediaries with products but not liabilities", "Intermediaries in stock markets", "Intermediaries receiving/paying funds", "All SEBI registered intermediaries"], a: "All SEBI registered intermediaries", e: "SEBI AML standards apply to all intermediaries registered with the board." },
        { q: "A 'Straight Arrow' investor is a/an ________ investor.", o: ["Confident and careful", "Well balanced", "Anxious and careful", "Anxious and impetuous"], a: "Well balanced", e: "Straight-arrow investors are so well-balanced they cannot be placed in a specific quadrant of the BB&K model." },
        { q: "Which is the first line of action for an investor looking for grievance redressal?", o: ["Contact SEBI via SCORES", "Contact investment adviser", "Contact the regulator", "Contact the product / service provider"], a: "Contact the product / service provider", e: "The first step in grievance redressal is always to contact the product or service provider directly." },
        { q: "Identify the important function(s) of the banking system in an economy?", o: ["Guarantees funds", "Provides returns to investors", "Provides credit at efficient cost", "All of the above"], a: "Provides credit at efficient cost", e: "Banks act as intermediaries to provide credit at reasonable and efficient costs to seekers." },
        { q: "When are the terms of a Forward contract agreed upon?", o: ["Settlement date", "Date they enter into contract", "Expiration date", "First day of financial year"], a: "Date they enter into contract", e: "Terms for a forward contract are decided 'today'—the date the parties enter into the contract." },
        { q: "What is the primary benefit of the foreign exchange market to an importer?", o: ["Speculation to reduce costs", "Hedge risk of currency movement", "Exploit arbitrage", "All of the above"], a: "Hedge risk of currency movement", e: "FX markets allow importers to hedge against the risk of adverse currency movements." },
        { q: "________ manages the operational and regulatory aspects of the public offer of shares.", o: ["Registrar and transfer agents", "Underwriters", "Lead mangers", "Bankers"], a: "Lead mangers", e: "Lead managers ensure compliance with all regulatory and operational requirements for a public issue." },
        { q: "In what way does the secondary market price affect primary market capital raising?", o: ["Indication of price level for new capital", "Promoters sell shares to raise funds", "No effect on capital raising"], a: "Indication of price level for new capital", e: "The secondary market provides price identification that supports capital raising in the primary market." },
        { q: "Which among these is NOT a valid PMS classification?", o: ["Commodity PMS", "Forex PMS", "Equity PMS", "Fixed income PMS"], a: "Forex PMS", e: "There is no recognized product class for Forex PMS under standard classifications." },
        { q: "Which statements assess an investor's ability to save and invest?", o: ["Net worth statement", "Bank Statement", "Cash Flow Statement", "Income and Expenses statement"], a: "Income and Expenses statement", e: "The Income and Expense statement shows the surplus available periodically for investment." },
        { q: "Which variables affect portfolio risk?", o: ["Weights of Investments", "Co-movement", "Risk of Investments", "All of the above"], a: "All of the above", e: "Portfolio risk considers individual investment risk, weights, and the correlation (co-movement) between them." },
        { q: "Is an adviser helping in platform selection for execution ethical?", o: ["Ethical as it helps investor", "Ethical if adviser has own platform", "Unethical as it shifts responsibility", "Unethical per IA regulations"], a: "Unethical per IA regulations", e: "SEBI IA regulations require strict segregation between advisory and execution activities." },
        { q: "Which mutual fund schemes must be mandatorily listed on the exchange?", o: ["All Equity schemes", "All Debt schemes", "Open Ended schemes", "Closed Ended schemes"], a: "Closed Ended schemes", e: "Closed-ended schemes must be listed to provide liquidity to investors who wish to exit." },
        { q: "Is ethics just following legal requirements?", o: ["Correct", "Incorrect - legal is complex", "Incorrect - ethics deals with morals", "Incorrect - must follow all laws"], a: "Incorrect - ethics deals with morals", e: "Ethics involves principles and values that often go beyond basic legal compliance." },
        { q: "________ is the market for first-time issuance of securities.", o: ["Money Market", "Forward Market", "Secondary Market", "Primary Market"], a: "Primary Market", e: "The primary market is where issuers raise capital by issuing securities to investors for the first time." },
        { q: "In a fund of funds, the portfolio consists of –", o: ["Units of other schemes", "Derivatives", "Debt securities", "Equity instruments"], a: "Units of other schemes", e: "A Fund of Funds (FoF) portfolio primarily consists of units of other mutual fund schemes." },
        { q: "In an 'Ethical dilemma', what is the nature of the options?", o: ["Any of them would be suitable", "All of them are proper to be chosen", "All the options are such that they would lead to some ethical violation", "There are no implications of choosing any one"], a: "All the options are such that they would lead to some ethical violation", e: "An ethical dilemma involves choosing between alternatives that both involve some form of violation." },
        { q: "A derivative's value is derived from ________ .", o: ["Some other asset", "Itself", "Demand", "Traded prices"], a: "Some other asset", e: "Derivatives derive their value from underlying assets like equity, debt, or commodities." },
        { q: "A positive relationship between return and risk is consistent with ________ .", o: ["risk seekers", "risk neutral", "risk averse", "None"], a: "risk averse", e: "Risk-averse investors demand higher expected returns for accepting higher risk levels." },
        { q: "If you can't sell 10,000 shares when volume is 800, this is ________ risk.", o: ["Market", "Sector specific", "Transactional", "Liquidity risk"], a: "Liquidity risk", e: "Liquidity risk is the inability to find buyers or sellers for a position quickly at the market price." },
        { q: "What constitutes an ethical breach between advisor and client?", o: ["Concealing conflicts", "Misleading recommendations", "Favoring personal commissions", "All of the above"], a: "All of the above", e: "Fiduciary duty is violated by concealing conflicts, providing biased advice, or favoring personal gain." },
        { q: "Which AIF category is permitted to employ leverage?", o: ["Category I", "Category II", "Category III", "None"], a: "Category III", e: "Category III AIFs are uniquely permitted to use leverage for complex trading strategies." },
        { q: "Can a person seek exemption from penalties for fraud if they didn't gain?", o: ["No - regulation doesn't require gain", "No - benefits could materialize later", "Yes - if victim waives", "Yes - if no personal benefit"], a: "No - regulation doesn't require gain", e: "Under SEBI FUTP regulations, fraud is established by the act and intent, regardless of whether a gain occurred." },
        { q: "Which instruments are exclusively issued by Central Government?", o: ["Securitized paper", "Certificates of Deposit", "Treasury bills", "Bonds"], a: "Treasury bills", e: "Treasury Bills (T-Bills) are short-term debt instruments issued solely by the Central Government." },
        { q: "What describes the core activity of a Private Equity (PE) fund?", o: ["Early-stage funding", "Funding later-stage businesses", "Publicly traded firm focus", "Providing loans"], a: "Funding later-stage businesses", e: "PE funds primarily invest in established, later-stage companies for expansion or restructuring." },
        { q: "Which source includes portfolio rebalancing norms?", o: ["GIPS", "Investment Policy Statement", "PMS Regulations", "Scheme document"], a: "Investment Policy Statement", e: "Strategic rebalancing norms to maintain target asset allocation are found in the IPS." },
        { q: "At what price can investors buy listed closed-end units after the NFO?", o: ["Lower than NAV", "Higher than NAV", "Traded prices (higher or lower than NAV)", "Cannot be bought"], a: "Traded prices (higher or lower than NAV)", e: "Listed closed-end units trade on an exchange at market prices that may reflect a premium or discount to NAV." },
        { q: "What is the minimum AIF scheme corpus as per SEBI?", o: ["Rs 5 crore", "Rs 10 crore", "Rs 15 crore", "Rs 20 crore"], a: "Rs 20 crore", e: "SEBI requires each scheme of an Alternative Investment Fund to have a minimum corpus of at least Rs. 20 crores." },
        { q: "Diversification has the biggest impact on ________ risk.", o: ["Company specific risk", "Market risk", "Transactional risk", "All"], a: "Company specific risk", e: "Company-specific (unsystematic) risk is unique to a firm and can be offset through diversification." },
        { q: "Money market instruments are ________ .", o: ["volatile", "highly liquid", "overnight maturity only", "issued only by RBI"], a: "highly liquid", e: "Money market instruments are short-term, low-risk, and designed to provide high liquidity." }
    ],
    test3: [
        { q: "A person has garnered sufficient corpus for his retirement. He is in the distribution stage of retirement. Recommend an annuity to him.", o: ["Semi variable annuity", "Immediate life annuity", "Deferred life annuity", "Variable annuity"], a: "Immediate life annuity", e: "In the distribution stage, the retired person needs funds immediately. An immediate annuity begins payments immediately on purchase." },
        { q: "A person in whose favour the property under trust is passed in fiduciary capacity is called as ________ .", o: ["Trustee", "Beneficiary", "Prosecutor", "Executor"], a: "Beneficiary", e: "A beneficiary is the person in whose favour the property is held and who enjoys the benefits of the trust." },
        { q: "Jaya needs Rs.5 lakhs for an emergency medical procedure. Which investment is she most likely to tap?", o: ["Shares of Hindalco Ltd", "Bank deposit", "Gold jewellery", "5-year bonds of a finance company"], a: "Bank deposit", e: "A bank deposit is the most liquid option available for immediate emergency needs." },
        { q: "Which of the following is true about the impact of asset allocation decisions? A. Asset allocation explains a larger percentage of variation in the returns of a single fund. B. Asset allocation explains a significant percentage of the variability in returns of a broadly diversified portfolio.", o: ["A only", "B only", "Both A and B", "Neither A nor B"], a: "B only", e: "Asset allocation explains a significant percentage of return variability in broadly diversified portfolios." },
        { q: "What is the output of fundamental analysis of an equity share?", o: ["Book Value of the share", "Intrinsic Value of the share", "Market Value of the share", "Face Value of the share"], a: "Intrinsic Value of the share", e: "Fundamental analysis determines the intrinsic value based on economic factors like future earnings and cash flows." },
        { q: "Within what period of time should the insurance ombudsman make a recommendation for a complaint which has been raised with them?", o: ["Within 1 month", "Within 45 days", "Within 2 weeks", "Within 1 week"], a: "Within 1 month", e: "The Ombudsman will make a recommendation within one month of receipt of a complaint." },
        { q: "Mr. Suraj has invested in mutual funds. How will his holding in mutual funds be denoted?", o: ["In the form of Shares", "In the form of Rupees", "In the form of percentage holding", "In the form of Units"], a: "In the form of Units", e: "Mutual fund holdings are denoted in units." },
        { q: "An investment adviser has to advise his client on good portfolio management schemes (PMS) and choose the best for the investments to be made by his client. He finds that the best PMS product is offered by a company in which his spouse works. How can he solve this dilemma?", o: ["As there is a conflict of interest, this PMS product should be dropped", "As there is a conflict of interest, this PMS product is ineligible", "As the PMS product is best, he should recommend it", "He should make a full disclosure to his client"], a: "He should make a full disclosure to his client", e: "Investment advisers have a fiduciary responsibility to make full disclosure of all facts, including potential conflicts of interest." },
        { q: "The decision of Rebalancing is essentially a trade-off between ________ .", o: ["Cost of not rebalancing versus gain of rebalancing", "Gain of not rebalancing versus cost of rebalancing", "Gain of not rebalancing versus cost of not rebalancing", "Cost of rebalancing versus cost of not rebalancing"], a: "Cost of rebalancing versus cost of not rebalancing", e: "Portfolio rebalancing involves a trade-off between the costs of doing it and the costs of not doing it." },
        { q: "Calculate the coupon yield of bond which pays a coupon of Rs 14 on a face value of Rs.100 and the market price of it is Rs.109.", o: ["12.84%", "14%", "8.97%", "11.52%"], a: "14%", e: "Coupon yield is the coupon payment as a percentage of the face value (14 / 100 = 14%)." },
        { q: "A Portfolio Management Service is offering a value based PMS product which an investor is finding interesting. He wants to know the risks associated with this strategy. Where can he find this information?", o: ["Disclosure document", "Scheme offer document", "Summary of discussions", "Scheme Information Document (SID)"], a: "Disclosure document", e: "The Disclosure Document includes portfolio risks specific to each investment approach." },
        { q: "Ms. Kamat is an investment advisor. She is also an expert in derivatives trading. One of her client, Mr. Das, is quiet close to his retirement and is finding that his retirement corpus is inadequate. Ms. Kamat advices him to invest in select derivatives so that he can earn a good profit and makeup for the shortfall. What do you think about this advice?", o: ["The advice is correct if she takes responsibility", "The advice is correct to reach goals", "The advice is not correct for his life cycle stage", "The advice is correct as she is an expert"], a: "The advice is not correct for his life cycle stage", e: "Derivatives are high-risk products and are unsuitable for a person approaching retirement who should focus on capital preservation." },
        { q: "What is the simultaneous purchase and sale of same asset in different markets known as ?", o: ["Trading", "Speculation", "Arbitrage", "Hedging"], a: "Arbitrage", e: "Arbitrage is the simultaneous purchase and sale of an asset to take advantage of price differences in different markets." },
        { q: "Which of these statement(s) is/are TRUE with respect to Attribution Analysis?", o: ["Determines return due to asset selection or allocation", "Determines if portfolio return was better than benchmark", "Both of the above are true", "None of the above are true"], a: "Both of the above are true", e: "Attribution analysis dissects returns to quantify the sources, such as manager skill vs benchmark performance." },
        { q: "In which of the following modes of payment for purchase of mutual fund units should the bank accounts of the mutual fund and the investor be with the same bank?", o: ["NEFT", "Direct Transfer", "RTGS", "All of the above"], a: "Direct Transfer", e: "Direct transfers require both accounts to be with the same bank." },
        { q: "Investment plans which aim at future financial independence of the investor should not be targeted to investors in ________ phase.", o: ["Accumulation", "Consolidation", "Spending", "Gifting"], a: "Spending", e: "Plans for future independence are for wealth building; investors in the spending phase are drawing down their corpus." },
        { q: "According to the Negotiable Instruments Act, which of these is/are negotiable instruments?", o: ["Bill of Exchange", "Promissory Note", "Cheque", "All of the above"], a: "All of the above", e: "The Negotiable Instruments Act includes promissory notes, bills of exchange, and cheques." },
        { q: "Identify the act which is covered under money laundering as related to proceeds of crime.", o: ["Acquisition", "Possession", "Concealment", "All of the above"], a: "All of the above", e: "Money laundering offences include concealment, possession, and acquisition of proceeds of crime." },
        { q: "A NPS subscriber has raised a complaint with the central record keeping agency. This complaint has to be resolved within what period of time?", o: ["15 days", "30 days", "45 days", "60 days"], a: "30 days", e: "Complaints raised with a CRA must be resolved within 30 days." },
        { q: "Risk due to fluctuations in currency exchange rates is known as ________ .", o: ["Systematic risk", "Unsystematic risk", "Total Risk", "Arbitrage Risk"], a: "Systematic risk", e: "Systematic risk includes common factors like exchange rates that cannot be diversified away." },
        { q: "During the continuous offer period of a mutual fund, investments can be made using ________ .", o: ["ASBA", "Electronic Payment modes", "ASBA and UPI", "All of the above"], a: "Electronic Payment modes", e: "In the continuous offer period, electronic modes like RTGS and NEFT are used; ASBA is for NFOs." },
        { q: "What is the primary objective for imposing margins on trades in the securities market?", o: ["Collect money for Investor Protection Fund", "Income source for stock exchanges", "Ensure damages from defaults are minimised", "Incentive for brokers"], a: "Ensure damages from defaults are minimised", e: "Margins are a risk containment mechanism to mitigate risks of default on payment or delivery." },
        { q: "What is the reason for which Alternate Investments are added to an investment portfolio?", o: ["Improve liquidity", "Legal requirement", "Enhance the returns", "Receive steady cash flows"], a: "Enhance the returns", e: "Alternative investments provide better risk-return trade-offs and help in return enhancement." },
        { q: "Who manages the issuance of central and state government securities and who is also the banker to Indian government?", o: ["State Bank of India", "Ministry of Finance", "SEBI", "Reserve Bank of India"], a: "Reserve Bank of India", e: "The RBI acts as the banker and performs merchant banking functions for the government." },
        { q: "An investor has pledged his mutual fund units with a bank and a lien has been marked on them in favour of that bank. Now the investor has repaid the loan and he has written to the mutual fund to unmark the lien. Is this the correct process to be followed?", o: ["Yes, if bank also signed", "Yes, if terms allow", "No, lien lifts automatically", "No, request only by the bank"], a: "No, request only by the bank", e: "Only the lender (bank) can initiate the unmarking of a lien." },
        { q: "Which of this information is used for an Asset Allocation recommendation?", o: ["The Investor profile", "Risk-return on investment opportunity", "Both A and B", "Neither A nor B"], a: "Both A and B", e: "Asset allocation combines investor needs with forecasts of risk and return on asset classes." },
        { q: "________ is the channel between savers and users of capital in the economy.", o: ["Stock Brokers", "Account aggregators", "Banks", "All of the above"], a: "Banks", e: "Banks collect surplus funds from depositors and lend them to those in need of capital." },
        { q: "What is the financial product known as whose value is derived from an underlying asset?", o: ["Derivative", "Financial Asset", "Convertible Debenture", "Insurance"], a: "Derivative", e: "Derivatives derive their value from underlying assets like equity, debt, or commodities." },
        { q: "Which of these is considered as a fraudulent act as per the SEBI Prevention of Fraudulent and Unfair Trade Practices Regulations?", o: ["Representation made in reckless manner causing loss", "Suggestion of a false fact by one who knows it is false", "Promise made without intention of performing it", "All of the above"], a: "All of the above", e: "Fraud includes acts, expressions, or omissions intended to induce dealing in securities." },
        { q: "Which of these will NOT be included in the portfolio of Gold ETFs?", o: ["Cash", "Gold deposits", "Units of other ETFs", "Gold receipts"], a: "Units of other ETFs", e: "Gold ETFs hold physical gold, receipts, or gold deposits, but not other ETF units." },
        { q: "What is the difference between Mutual Funds, Alternative investment funds and Portfolio Management schemes?", o: ["Minimum investment in AIF/PMS is high", "Only institutional investors can invest in AIF/PMS", "AIF/PMS are regulated by RBI", "All of the above"], a: "Minimum investment in AIF/PMS is high", e: "AIFs and PMS are for HNIs with high minimum investment requirements (e.g., Rs 1 crore for AIF)." },
        { q: "________ is/are function(s) of the derivatives market.", o: ["Improves liquidity in underlying markets", "Helps in better price discovery", "Transfers risk", "All of the above"], a: "All of the above", e: "Derivatives markets improve liquidity, aid in price discovery, and allow for risk transfer." },
        { q: "Which of these concerns of retail investors with real estate investments is primarily addressed by REITs?", o: ["Inaccessibility to commercial real estate", "Large fund commitment", "Low rental yield", "All of the above"], a: "All of the above", e: "REITs allow individuals to invest small amounts in income-producing commercial real estate." },
        { q: "Sustainable investing will consider ________ .", o: ["Governance factors", "Environmental factors", "Social factors", "All of the above"], a: "All of the above", e: "Sustainable investing considers Environmental, Social, and Governance (ESG) criteria." },
        { q: "A car loan is usually under ________ .", o: ["Pledge", "Mortgage", "Moratorium", "Hypothecation"], a: "Hypothecation", e: "Hypothecation creates a charge against an asset that remains with the borrower." },
        { q: "________ is the term used for the process of converting physical securities into electronic form.", o: ["Rematerialisation", "Dematerialisation", "Digitisation", "Electronic conversion"], a: "Dematerialisation", e: "Dematerialisation is the process of converting physical share certificates into electronic form." },
        { q: "Strategic asset allocation does NOT involve the following -", o: ["Take advantage of market situation", "Target allocation to different assets", "Long term decision", "Meet goals of the investor"], a: "Take advantage of market situation", e: "Strategic Asset Allocation is a long-term target policy, not a short-term tactical move." },
        { q: "The following is not a liquid asset :", o: ["Close ended fund balance", "Savings bank account balance", "Liquid fund balance", "Cash balance"], a: "Close ended fund balance", e: "Liquid assets are those easily converted to cash; close-ended funds are not considered liquid." },
        { q: "A private equity fund invests in ________", o: ["Early stage financing", "Later stage financing", "IPO financing", "Takeover financing"], a: "Later stage financing", e: "Private equity focuses on established, later-stage businesses." },
        { q: "The first level of complaint against a bank has to be filed with the ________", o: ["Civil Court", "Banking Ombudsman", "The Bank itself", "RBI"], a: "The Bank itself", e: "Grievances must first be filed with the bank's own customer redressal department." },
        { q: "Which of the following scenarios may create a conflict of interest that could negatively impact the investor?", o: ["Advisor offers advice across various products", "Advisor represents several different companies", "Advisor receives remuneration from providers", "All of the above"], a: "All of the above", e: "Remuneration from providers and representing multiple companies can lead to biased recommendations." },
        { q: "Which statement best reflects the relationship between risk and portfolio characteristics?", o: ["Greater risk linked to weaker correlation", "Lower risk linked to greater correlation", "Lower risk displays greater standard deviation", "Higher risk displays greater standard deviation"], a: "Higher risk displays greater standard deviation", e: "Standard deviation is a measure of risk; a higher value indicates more volatile returns." },
        { q: "Which of the following platforms provide grievance resolution for investors in Pension schemes?", o: ["SCORES", "CRA", "IGMS", "Any of the above, based on the product"], a: "Any of the above, based on the product", e: "Grievance redressal depends on the product: CRA for NPS, IGMS for insurance, and SCORES for market-linked plans." },
        { q: "A company announces a stock split, reducing the face value of its share from Rs 10 to Rs 2. Given that the market price before the split was Rs 1000, what will be the expected market price on the ex-date?", o: ["Around Rs 1000", "Around Rs 500", "Around Rs 200", "No impact on market price"], a: "Around Rs 200", e: "A split from Rs 10 to Rs 2 is a 5-for-1 split; the price adjusts to Rs 200 (1000 / 5)." },
        { q: "What type of equity is suitable for an investor in the accumulating phase?", o: ["Equity with Zero beta", "Equity with Low beta", "Equity with High beta", "None of the above"], a: "Equity with High beta", e: "Investors in the accumulation phase have a long horizon and can tolerate higher volatility for capital growth." },
        { q: "How can a complainant monitor the status of a complaint filed on the SCORES platform?", o: ["Contact the entity", "Submit request to SEBI", "Seek info from advisor", "By tracking the progress online"], a: "By tracking the progress online", e: "SCORES provides an online portal to lodge and track complaints using a registration number." },
        { q: "An investor has deposited Rs. 50 lakhs with a fund manager. Out of this amount, the fund manager has invested Rs 30 lakhs and earned Rs. 5 lakhs. What is the effective return for the investor?", o: ["16.66%", "10%", "12.25%", "30%"], a: "10%", e: "Effective return is calculated on the total amount deposited (50 lakhs), not just the invested portion." },
        { q: "Mr. Mehta is currently a registered investment adviser and he was a stock broker earlier. He has good knowledge of the stock markets. Mr. Rohit is an young man with goals well into the future. He has no experience of stock markets. Mr. Mehta recommends Mr. Rohit to invest in stock markets given the investor’s needs and profile. According to you, is this a valid advice?", o: ["No, he should invest in low risk products", "No, he has no experience", "Yes, to get to goals faster", "Yes, suitable for his profile"], a: "Yes, suitable for his profile", e: "Equity is suitable for young investors with long-term horizons, despite a lack of experience." },
        { q: "Which body lays down the benchmark for customer service standards in the Banking industry ?", o: ["RBI - Banking Division", "RBI", "Banking codes and Standards Board of India", "SEBI"], a: "Banking codes and Standards Board of India", e: "The BCSBI sets benchmarks and minimum standards of banking practice in India." },
        { q: "Identify the reason as to why one should invest in Real Estate?", o: ["Its a good hedge against inflation", "It has a very high co-relation with other assets", "It provides good rental yield", "All of the above"], a: "Its a good hedge against inflation", e: "Real estate is historically viewed as a good hedge against inflation." }
    ],
    test4: [
        {
            q: "The 'Statement of Additional Information' (SAI) contains:",
            o: ["Only the financial performance of the fund", "Statutory information about the Mutual Fund and its constitution", "Details of the specific scheme's investment objective", "The list of stocks in the portfolio"],
            a: "Statutory information about the Mutual Fund and its constitution",
            e: "The SAI contains statutory information about the Mutual Fund, its sponsors, AMC, and trustees. It is part of the offer document alongside the SID."
        },
        {
            q: "As per SEBI (Investment Advisers) Regulations, 2013, an investment adviser should maintain records for a minimum period of ______ years.",
            o: ["2", "3", "5", "8"],
            a: "5",
            e: "Investment advisers are required to maintain records, including client advice and research reports, for at least 5 years."
        },
        {
            q: "Which of the following risks is associated with the possibility that the issuer of a bond may fail to make timely payments of interest or principal?",
            o: ["Interest Rate Risk", "Liquidity Risk", "Credit Risk (Default Risk)", "Reinvestment Risk"],
            a: "Credit Risk (Default Risk)",
            e: "Credit risk is the risk that a borrower/issuer will default on their contractual obligations, failing to pay back interest or the principal amount."
        },
        {
            q: "In the context of financial planning, 'Real Rate of Return' is calculated as:",
            o: ["Nominal Return + Inflation", "Nominal Return - Inflation", "Nominal Return / Inflation", "Nominal Return * Inflation"],
            a: "Nominal Return - Inflation",
            e: "The real rate of return is the actual growth of purchasing power, calculated by subtracting the inflation rate from the nominal (stated) return."
        },
        {
            q: "Who is responsible for the day-to-day management of a Mutual Fund's portfolio?",
            o: ["The Board of Trustees", "The Sponsor", "The Asset Management Company (AMC)", "The Custodian"],
            a: "The Asset Management Company (AMC)",
            e: "The AMC manages the investments of the fund under the supervision of the Trustees and within the guidelines set by SEBI."
        },
        {
            q: "A strategy where an investor invests a fixed amount of money at regular intervals is known as:",
            o: ["Value Averaging", "Rupee Cost Averaging (via SIP)", "Lump-sum Investing", "Market Timing"],
            a: "Rupee Cost Averaging (via SIP)",
            e: "Systematic Investment Plans (SIPs) use Rupee Cost Averaging, allowing investors to buy more units when prices are low and fewer when prices are high."
        },
        {
            q: "Which of the following is an example of an open-ended fund?",
            o: ["A fund that can be bought or sold only during the NFO period", "A fund that allows investors to enter or exit at any time at NAV-linked prices", "A fund that is listed on the stock exchange and has a fixed maturity", "A fund that does not issue new units after the initial offer"],
            a: "A fund that allows investors to enter or exit at any time at NAV-linked prices",
            e: "Open-ended funds allow continuous entry and exit, with units being bought or sold at the current Net Asset Value (NAV)."
        },
        {
            q: "The process of determining a client's risk tolerance based on their psychological and financial capacity is called:",
            o: ["Asset Allocation", "Risk Profiling", "Portfolio Rebalancing", "Financial Goal Setting"],
            a: "Risk Profiling",
            e: "Risk profiling assesses the client's willingness and ability to take risks, which is crucial for creating a suitable investment strategy."
        },
        {
            q: "Which entity provides the platform for trading in the secondary market in India?",
            o: ["SEBI", "RBI", "Stock Exchanges (NSE/BSE)", "AMFI"],
            a: "Stock Exchanges (NSE/BSE)",
            e: "Stock exchanges like the NSE and BSE provide the infrastructure and platform for the trading of listed securities in the secondary market."
        },
        {
            q: "Under the old tax regime, what is the maximum deduction allowed under Section 80C of the Income Tax Act?",
            o: ["₹50,000", "₹1,00,000", "₹1,50,000", "₹2,00,000"],
            a: "₹1,50,000",
            e: "Section 80C allows a maximum deduction of ₹1.5 lakh per financial year for investments in instruments like PPF, ELSS, and Life Insurance."
        },
        {
            q: "Which of the following is a key characteristic of a 'Liquid Fund'?",
            o: ["It has a lock-in period of 3 years", "It invests in debt and money market instruments with maturity up to 91 days", "It primarily invests in small-cap stocks", "It does not allow redemptions for the first 6 months"],
            a: "It invests in debt and money market instruments with maturity up to 91 days",
            e: "Liquid funds are a category of debt mutual funds that invest in very short-term market instruments, providing high liquidity and low risk."
        },
        {
            q: "The 'Beta' of a stock is a measure of its:",
            o: ["Liquidity", "Systematic Risk", "Unsystematic Risk", "Credit Risk"],
            a: "Systematic Risk",
            e: "Beta measures the volatility or systematic risk of a security or portfolio compared to the market as a whole."
        },
        {
            q: "Which document must an investor read to understand the specific risks associated with a mutual fund scheme?",
            o: ["Annual Report", "Fact Sheet", "Scheme Information Document (SID)", "Key Information Memorandum (KIM)"],
            a: "Scheme Information Document (SID)",
            e: "The SID contains all the vital information about the scheme, including its investment objective, asset allocation, and specific risk factors."
        },
        {
            q: "Under the SEBI Investment Adviser regulations, a 'Body Corporate' seeking registration must have a minimum net worth of:",
            o: ["₹5 Lakhs", "₹25 Lakhs", "₹50 Lakhs", "₹1 Crore"],
            a: "₹50 Lakhs",
            e: "SEBI requires body corporates acting as Investment Advisers to maintain a minimum net worth of ₹50 Lakhs."
        },
        {
            q: "An investor who wants to protect their portfolio from a market decline using derivatives is practicing:",
            o: ["Arbitrage", "Speculation", "Hedging", "Leveraging"],
            a: "Hedging",
            e: "Hedging is a risk management strategy used to offset potential losses in investments by taking an opposite position in a related asset."
        },
        {
            q: "In the context of life insurance, the period during which the policyholder can cancel the policy without penalty is called the:",
            o: ["Grace Period", "Waiting Period", "Free-look Period", "Cooling Period"],
            a: "Free-look Period",
            e: "The free-look period (usually 15-30 days) allows the policyholder to review the terms and conditions and return the policy if not satisfied."
        },
        {
            q: "Which of the following is a non-depreciating asset?",
            o: ["Plant and Machinery", "Computers", "Land", "Vehicles"],
            a: "Land",
            e: "Unlike most physical assets, land generally does not wear out or become obsolete; therefore, it is not subject to depreciation."
        },
        {
            q: "The 'Sharpe Ratio' is used to measure:",
            o: ["The total return of a fund", "Risk-adjusted returns", "The credit quality of a bond fund", "The expense ratio of a scheme"],
            a: "Risk-adjusted returns",
            e: "The Sharpe Ratio helps investors understand the return of an investment compared to its risk. A higher Sharpe ratio is generally better."
        },
        {
            q: "Which of the following is a 'Direct Expense' for a mutual fund scheme?",
            o: ["Marketing expenses", "Investment Management and Advisory fees", "Brokerage on trades", "All of the above"],
            a: "All of the above",
            e: "Direct expenses include all costs related to the operation and management of the fund, which are charged to the scheme's NAV."
        },
        {
            q: "A 'Large Cap' company is defined by SEBI as one that falls within the top ____ companies in terms of full market capitalization.",
            o: ["50", "100", "250", "500"],
            a: "100",
            e: "According to SEBI categorization, Large Cap companies are those ranked from 1st to 100th in terms of market capitalization."
        },
        {
            q: "Which investment instrument is specifically designed for the retirement of the girl child in India?",
            o: ["Public Provident Fund (PPF)", "National Savings Certificate (NSC)", "Sukanya Samriddhi Yojana (SSY)", "Kisan Vikas Patra (KVP)"],
            a: "Sukanya Samriddhi Yojana (SSY)",
            e: "SSY is a government-backed savings scheme targeted at the parents of girl children to build a fund for their future education and marriage."
        },
        {
            q: "The difference between the actual return of a fund and its benchmark return is called:",
            o: ["Active Return", "Tracking Error", "Standard Deviation", "Yield to Maturity"],
            a: "Active Return",
            e: "Active return is the profit or loss generated by an investment relative to its benchmark. Tracking error measures the consistency of this difference."
        },
        {
            q: "What is the primary role of a 'Custodian' in a Mutual Fund?",
            o: ["To sell units to investors", "To keep the fund's securities in safe custody", "To manage the fund's portfolio", "To audit the fund's accounts"],
            a: "To keep the fund's securities in safe custody",
            e: "The custodian is responsible for the physical and electronic security of the fund's assets (stocks, bonds, etc.)."
        },
        {
            q: "A 'Gilt Fund' primarily invests in:",
            o: ["Corporate Bonds", "Gold", "Government Securities", "International Equities"],
            a: "Government Securities",
            e: "Gilt funds invest only in government securities (G-Secs), which carry zero credit risk but are sensitive to interest rate changes."
        },
        {
            q: "In a 'HUF' (Hindu Undivided Family), the head of the family who manages the affairs is called the:",
            o: ["Karta", "Coparcener", "Trustee", "Promoter"],
            a: "Karta",
            e: "The Karta is the senior-most member who has the legal authority to manage the HUF's assets and affairs."
        },
        {
            q: "Which of the following is a characteristic of 'Passive Investing'?",
            o: ["Attempting to beat the market index", "Frequent buying and selling of stocks", "Tracking a market index like the Nifty 50", "High fund management fees"],
            a: "Tracking a market index like the Nifty 50",
            e: "Passive investing aims to replicate the performance of a specific index rather than outperforming it through active stock selection."
        },
        {
            q: "The 'Exit Load' in a mutual fund is charged when:",
            o: ["An investor buys units", "An investor switches between schemes", "An investor redeems units before a specific period", "The AMC closes the scheme"],
            a: "An investor redeems units before a specific period",
            e: "Exit load is a fee charged by the AMC to discourage short-term withdrawals and cover transaction costs."
        },
        {
            q: "What does 'NAV' stand for in Mutual Funds?",
            o: ["Net Assets Value", "New Asset Venture", "Net Associated Value", "National Asset Valuation"],
            a: "Net Assets Value",
            e: "NAV represents the market value per unit of a mutual fund scheme on a given day."
        },
        {
            q: "Which of the following is a quantitative measure of risk that shows the spread of returns around the average?",
            o: ["Beta", "Standard Deviation", "Correlation", "R-Squared"],
            a: "Standard Deviation",
            e: "Standard Deviation measures the dispersion or volatility of a set of data from its mean. In finance, it represents total risk."
        },
        {
            q: "The 'Power of Compounding' is most effective when the investment duration is:",
            o: ["Short-term", "Medium-term", "Long-term", "Compounding is independent of time"],
            a: "Long-term",
            e: "Compounding generates earnings on previous earnings. The longer the time horizon, the more dramatic the growth."
        },
        {
            q: "Which of the following is a tax-saving instrument under Section 80C?",
            o: ["Fixed Deposit with 1-year maturity", "Public Provident Fund (PPF)", "Corporate Bonds", "Gold ETFs"],
            a: "Public Provident Fund (PPF)",
            e: "PPF is one of the most popular long-term tax-saving instruments under Section 80C, offering EEE tax status."
        },
        {
            q: "What is the primary objective of 'Asset Allocation'?",
            o: ["To maximize returns regardless of risk", "To minimize taxes only", "To balance risk and reward by diversifying among different asset classes", "To pick the best performing stock for the year"],
            a: "To balance risk and reward by diversifying among different asset classes",
            e: "Asset allocation is the most important factor in determining portfolio performance while keeping risk within the investor's comfort zone."
        },
        {
            q: "A 'REIT' (Real Estate Investment Trust) allows investors to:",
            o: ["Buy physical property directly", "Invest in income-generating real estate through a pool of capital", "Avoid all market risks", "Get guaranteed monthly income"],
            a: "Invest in income-generating real estate through a pool of capital",
            e: "REITs are similar to mutual funds but for real estate, allowing small investors to earn dividends from large-scale properties."
        },
        {
            q: "Which of the following is a function of the 'Registrar and Transfer Agent' (RTA)?",
            o: ["Managing the fund's investments", "Maintaining records of investor accounts and transactions", "Keeping the physical stock certificates", "Auditing the AMC's financial statements"],
            a: "Maintaining records of investor accounts and transactions",
            e: "RTAs handle the paperwork and electronic record-keeping for investor purchases, redemptions, and details updates."
        },
        {
            q: "A 'Growth Option' in a mutual fund scheme means:",
            o: ["Dividends are paid regularly to the investor", "Profits are reinvested back into the scheme", "The fund only invests in small-cap stocks", "The NAV remains constant over time"],
            a: "Profits are reinvested back into the scheme",
            e: "In the growth option, the scheme does not pay dividends; instead, the value of the units increases as the underlying assets grow."
        },
        {
            q: "Which of the following is a systematic risk?",
            o: ["Management changes in a company", "Labor strike in a factory", "Interest rate changes by the RBI", "A product failure in a specific firm"],
            a: "Interest rate changes by the RBI",
            e: "Systematic risk affects the entire market or economy and cannot be diversified away. Macroeconomic factors like interest rates are examples."
        },
        {
            q: "The 'Expense Ratio' of a mutual fund represents:",
            o: ["The total amount of dividends paid", "The cost of managing the fund expressed as a percentage of AUM", "The profit earned by the AMC", "The taxes paid by the investor"],
            a: "The cost of managing the fund expressed as a percentage of AUM",
            e: "A lower expense ratio is generally better for the investor as it means a larger portion of the returns stays in the fund."
        },
        {
            q: "Which regulatory body governs the insurance sector in India?",
            o: ["SEBI", "RBI", "IRDAI", "PFRDA"],
            a: "IRDAI",
            e: "The Insurance Regulatory and Development Authority of India (IRDAI) is the statutory body that regulates and promotes the insurance industry."
        },
        {
            q: "An investor's 'Ability to take risk' is primarily determined by:",
            o: ["Their age and financial goals", "Their emotional reaction to market drops", "How much their friends are investing", "TV news recommendations"],
            a: "Their age and financial goals",
            e: "Risk ability is based on objective factors like time horizon, income, and liabilities, whereas risk 'willingness' is psychological."
        },
        {
            q: "Which of the following is a feature of the 'National Pension System' (NPS)?",
            o: ["It is only for government employees", "It provides a fixed, guaranteed pension", "It allows a mix of equity, corporate bonds, and government securities", "It has no withdrawal restrictions before age 60"],
            a: "It allows a mix of equity, corporate bonds, and government securities",
            e: "NPS is a voluntary, long-term retirement savings scheme that gives subscribers the flexibility to choose their asset allocation."
        },
        {
            q: "The 'Time Value of Money' suggests that ₹100 today is worth:",
            o: ["Less than ₹100 in the future", "More than ₹100 in the future", "Exactly ₹100 in the future", "Nothing in the future"],
            a: "More than ₹100 in the future",
            e: "Due to potential earning capacity and inflation, money available now is worth more than the same amount in the future."
        },
        {
            q: "Which of the following describes 'Rebalancing' a portfolio?",
            o: ["Adding more funds to the best performing asset", "Adjusting the weights of assets to restore the original target allocation", "Selling all assets and keeping cash", "Investing only in new NFOs"],
            a: "Adjusting the weights of assets to restore the original target allocation",
            e: "Rebalancing ensures that market movements haven't made your portfolio too risky or too conservative compared to your plan."
        },
        {
            q: "In Mutual Funds, 'AUM' stands for:",
            o: ["Average Unit Management", "Assets Under Management", "Annual Unit Maintenance", "All Unit Metrics"],
            a: "Assets Under Management",
            e: "AUM is the total market value of the investments managed by a mutual fund or an individual scheme."
        },
        {
            q: "Which of the following is a disadvantage of keeping money in a Savings Account for the long term?",
            o: ["High risk of capital loss", "Low liquidity", "Returns may not beat inflation", "Complex withdrawal process"],
            a: "Returns may not beat inflation",
            e: "While savings accounts are very safe and liquid, the interest rates are often lower than the inflation rate, reducing purchasing power."
        },
        {
            q: "The 'P/E Ratio' of a stock stands for:",
            o: ["Profit to Expense Ratio", "Price to Earnings Ratio", "Percent of Equity Ratio", "Portfolio to Equity Ratio"],
            a: "Price to Earnings Ratio",
            e: "P/E ratio is a valuation metric that compares a company's current share price to its per-share earnings."
        },
        {
            q: "What is the primary difference between a 'Stock' and a 'Bond'?",
            o: ["Stocks are safer than bonds", "Stocks represent ownership; bonds represent a loan to the issuer", "Bonds have higher returns than stocks in the long run", "Stocks pay interest; bonds pay dividends"],
            a: "Stocks represent ownership; bonds represent a loan to the issuer",
            e: "Equity holders are owners of the company, while bondholders are creditors who receive interest payments."
        },
        {
            q: "A 'Sector Fund' is one that invests in:",
            o: ["A mix of all sectors in the Nifty 50", "Companies within a specific industry or sector", "Only government bonds", "International tech companies only"],
            a: "Companies within a specific industry or sector",
            e: "Sector funds are higher risk because they lack diversification across different industries (e.g., a Banking Fund or IT Fund)."
        },
        {
            q: "Which of the following is a mandatory requirement for opening a Demat account?",
            o: ["Passport", "PAN Card", "Graduation Degree", "Voter ID only"],
            a: "PAN Card",
            e: "A Permanent Account Number (PAN) is compulsory for all financial transactions in the securities market, including opening a Demat account."
        },
        {
            q: "The 'Dividend Payout Option' in a mutual fund means:",
            o: ["The NAV increases continuously", "A portion of the profits is paid out to the investor as dividends", "The investor gets a guaranteed 10% return", "No taxes are applicable on the returns"],
            a: "A portion of the profits is paid out to the investor as dividends",
            e: "In this option, the AMC distributes a part of the realized profits to investors, which reduces the scheme's NAV accordingly."
        },
        {
            q: "Which of the following best describes 'Diversification'?",
            o: ["Investing all money in a single top-performing stock", "Spreading investments across different assets to reduce unsystematic risk", "Keeping all money in a single bank account", "Trading frequently to catch market highs"],
            a: "Spreading investments across different assets to reduce unsystematic risk",
            e: "Diversification follows the principle of 'not putting all your eggs in one basket' to minimize the impact of any single investment's failure."
        }
    ],
    test5: [
        {
            q: "Can Investment Advisers accept cash from their client's as their advisory fees?",
            o: ["Yes, they can accept", "No, they cannot accept"],
            a: "No, they cannot accept",
            e: "As per SEBI Code of Conduct for Investment Advisers - Receiving fees though banking channel only : To bring transparency in dealing with the clients, Investment Advisers shall accept fees strictly by account payee crossed cheques / demand draft or by way of direct credit into their bank account through NEFT/ RTGS/IMPS/UPI. Investment Advisers cannot accept cash deposits."
        },
        {
            q: "In ___________, it possible to take insurance cover for an event that is certain to occur.",
            o: ["Motor Insurance", "Aviation Insurance", "Health Insurance", "Life Insurance Cover"],
            a: "Life Insurance Cover",
            e: "A Life Insurance cover pays the money on death of the policy holder. The event of death is a certainty, only time is not known."
        },
        {
            q: "One of the advantage of an Unit Linked Insurance Plan is that it leaves the _________ in the hands of the investor.",
            o: ["Asset Allocation decision", "Premium determination", "Dividend pay-out decision", "Portfolio selection"],
            a: "Asset Allocation decision",
            e: "In a Unit Linked Insurance Plans (ULIP), the policyholder is offered the option of choosing the fund mix based on his desired asset allocation. Different insurers have different names for these funds to reflect their return and risk characteristics. Investors are also given the option to switch between funds."
        },
        {
            q: "Identify which of these is different in a regular plan and direct plan of a mutual fund scheme?",
            o: ["The Net Asset Value (NAV)", "Returns", "Expense Ratio", "All of the above"],
            a: "All of the above",
            e: "In Direct plans, investors can buy the fund directly from the AMCs bypassing financial intermediaries. Those being purchased and sold via intermediaries/mutual fund agents are categorized as Regular plans. The Expense ratio is always lower in direct plans as commissions etc. payable to intermediaries are not required to be paid in direct plans. Lower expense ratios of direct plans result in higher returns. The NAV of direct plans is higher than their regular counterpart because of their higher returns."
        },
        {
            q: "________ is NOT one of the accepted model of execution of PMS services.",
            o: ["Custodial execution", "Individual execution", "Pooled Execution", "None of the above"],
            a: "None of the above",
            e: "SEBI recognizes three PMS execution models: Individual, Pooled, and Custodial. Individual Execution: Trades executed in each client’s separate account; maximum transparency. Pooled Execution: Orders from multiple clients may be combined for better pricing, then fairly allocated; allowed if SEBI’s fair allocation rules are followed. Custodial Execution: Trades executed through a custodian who holds securities for clients. Misuse of pooled accounts (holding multiple clients’ money together without proper allocation) is banned. When implemented correctly, all three models are accepted."
        },
        {
            q: "Diversification of risk in equity markets is achieved due to ____ .",
            o: ["Due to diversification of business by the various companies", "Due to positive co-movement of economic indicators with market indicators", "Due to time lag in responses of investment returns to macroeconomic indicators", "Due to Cyclicality in business"],
            a: "Due to Cyclicality in business",
            e: "Diversification of risk happens because different companies and sectors behave differently over time, especially across various stages of the economic cycle. Cyclicality in business means industries do not all move together—some do well in expansions, others may hold up better in recessions. By investing across sectors with different cyclical patterns, investors reduce portfolio volatility and risk. This sectoral and cyclical diversification smooths returns by balancing out downturns in some industries with upturns in others."
        },
        {
            q: "What need should drive the asset allocation decision in a portfolio?",
            o: ["The need to maximize returns", "The need to reach the goals of the investor", "The need to minimize risk", "All of the above"],
            a: "The need to reach the goals of the investor",
            e: "Asset allocation is the process of deciding how to distribute an investor’s wealth into different asset classes for investment purposes. The primary driver of asset allocation should be the investor’s goals—such as wealth creation, retirement planning, or funding a child's education. While maximizing returns (option 1) and minimizing risk (option 3) are important, they are secondary to meeting the investor's specific financial objectives. Asset allocation is a balance between risk and return based on the investor’s risk tolerance, time horizon, and financial goals. Thus, while return maximization and risk minimization are factors, the core reason for asset allocation is to meet the investor’s goals effectively."
        },
        {
            q: "Why will be the returns to the investor who has used the Direct Access facility be higher ?",
            o: ["Due to lower distribution costs", "Due to lower fixed costs", "Due to lower portfolio management costs", "All of the above"],
            a: "Due to lower distribution costs",
            e: "Investors can directly invest in a mutual fund scheme by choosing the ‘Direct Plan’ option provided in the application form and submitting the application to the official point of acceptance. Such direct plans features a lower expense ratio for investors as no commission etc. has to be paid to distributors/agents."
        },
        {
            q: "What is the limit for making cash payments for mutual fund investments?",
            o: ["Rs. 50000 per year per investor", "Rs. 50000 per year per investor per mutual fund", "Rs. 100000 per year per investor per mutual fund", "Rs. 100000 per year per investor"],
            a: "Rs. 50000 per year per investor per mutual fund",
            e: "As per the Securities and Exchange Board of India (SEBI) guidelines, mutual funds are permitted to accept cash investments up to Rs. 50,000 per investor, per mutual fund, per financial year. This limit was increased from the earlier cap of Rs. 20,000 to encourage participation from investors in smaller towns and rural areas."
        },
        {
            q: "When an application is made for registration of a Portfolio Management Service (PMS), details of which stakeholder need NOT be provided?",
            o: ["Principal Banks", "Approved Brokers", "Merchant Bankers", "Auditors"],
            a: "Merchant Bankers",
            e: "A Merchant Banker is not involved in the PMS organizational structure. A Merchant Banker is usually appointed for managing public issues etc."
        },
        {
            q: "A complaint which is raised with an insurance company has to be resolved within ________ .",
            o: ["One week", "Two weeks", "Four weeks", "Six weeks"],
            a: "Two weeks",
            e: "An insurance company is required to resolve a grievance within 2 weeks of its receipt."
        },
        {
            q: "Identify what is relevant when an investment advisor advises his client on choosing the Regular plan or the Direct plan for investments in mutual funds?",
            o: ["The investor should get a cost-effective investment option", "The investor should have the ability to make a one-time commitment of time to execute the investment", "The investor should have the long term ability to execute investment decisions and maintain investments", "All of the above"],
            a: "All of the above",
            e: "When an investment advisor helps a client choose Regular vs. Direct plans in mutual funds, the advisor must consider: 1. Cost-effectiveness: Direct plans have lower expense ratios, so the investor benefits only if they can manage investments without ongoing advisor support. 2. Ability to make a one-time commitment of time: Direct plans require the investor to set up and execute investments themselves. 3. Long-term ability to manage and maintain investments: Direct plans demand ongoing monitoring and decision-making. If the investor lacks skill, discipline, or interest, a Regular plan is better."
        },
        {
            q: "Which Act / Regulation empowers SEBI to impose penalties against securities market intermediaries ?",
            o: ["SEBI Act", "Securities Contract Regulation Act", "Prevention of fraudulent and unfair trade practices Regulations", "Stock Exchange Regulation Act"],
            a: "SEBI Act",
            e: "SEBI Act empowers SEBI to impose penalties and initiate adjudication proceedings against intermediaries who default on grounds such as failure to furnish information, return etc. or failure by any person to enter into agreement with clients etc."
        },
        {
            q: "Identify the reason which could lead to the Investment advisor- Client relationship falling short of the ethically high standards which is expected of such relationship ?",
            o: ["The inability of the investment adviser to understand the client's needs and situation", "The investment advisor is unable to rebalance the strategic asset allocation as per the market movements", "Due to regulatory reasons, the investment advisor is unable to provide the expected level of service to the client", "All of the above"],
            a: "The inability of the investment adviser to understand the client's needs and situation",
            e: "The foundation of an ethical advisor-client relationship is understanding the client’s financial goals, risk profile, and circumstances. If the adviser fails here, it directly violates suitability and fiduciary responsibility. Why others are incorrect: - Rebalancing issues relate more to performance or execution, not core ethics. - Regulatory constraints may limit services but do not imply ethical failure."
        },
        {
            q: "What is the maximum profit one can make from a short position in a 'Put Option'?",
            o: ["Unlimited profit only if the share prices go up", "Unlimited profit only if the share prices go down", "Unlimited profit in a flat market", "Only the option premium"],
            a: "Only the option premium",
            e: "A person who goes short in a 'Put Option' receives the option premium and that is his maximum profit. On the other hand, his losses can be unlimited. (Like wise, a person who is long in a ‘Put Option’ will have to pay the premium and that can be his maximum loss. On the other hand, his profits can be unlimited)"
        },
        {
            q: "What is an 'Impact Cost' with reference to the equities market?",
            o: ["Its the percentage price movement due to a particular trade", "Its the risk of trading in stocks which are not liquid", "Its the measure of liquidity risk", "All of the above"],
            a: "All of the above",
            e: "Liquidity risk is the risk of not being able to find a buyer or seller for the equity holdings. Liquidity risk is measured by impact cost. The impact cost is the percentage price movement caused by a particular order size (let’s say an order size of Rs.1 Lakh) from the average of the best bid and offer price in the order book snapshot. Less liquid stocks are more thinly traded, and a single large trade can move their prices considerably. Such stocks have high impact costs. A lower market impact implies the stock is more liquid."
        },
        {
            q: "How is a Registered Investment Advisor remunerated?",
            o: ["By the agency that employs the adviser", "By the producer of the product which is recommended by the adviser", "By the investor who is seeking the investment advice", "Any of the above as it depends on the contract with the investor"],
            a: "By the investor who is seeking the investment advice",
            e: "As per SEBI rules - An investment adviser shall not receive any consideration by way of remuneration or compensation or in any other form from any person other than the client being advised, in respect of the underlying products or securities for which advice is provided."
        },
        {
            q: "__________ instruments are used by structured products for tailoring the risk and return features of the products.",
            o: ["Derivatives", "Index Exposure", "Mutual Fund Exposure", "All of the above"],
            a: "Derivatives",
            e: "Structured products are customized and sophisticated investments. They provide investors risk-adjusted exposure to traditional investments or to assets that are otherwise difficult to obtain. Structured products greatly use derivatives to create desired risk exposures."
        },
        {
            q: "_________ is the most important attribute while choosing a comparable benchmark index.",
            o: ["Easy understanding", "Measurability of performance", "Number of securities", "Investment Approach"],
            a: "Investment Approach",
            e: "GIPS(Global Investment Performance Standards)- defines Benchmark as an independent rate of return (or hurdle rate), forming an objective test of the effective implementation of investment strategy. It is a standard or point of reference. It is a collection of investment opportunities or securities or risk factors which represent the investment characteristics and investment approach of the portfolio being evaluated against it."
        },
        {
            q: "_________ is likely to be a Category II Alternate investment fund.",
            o: ["Hedge fund", "Private debt fund", "Angel fund", "SME fund"],
            a: "Private debt fund",
            e: "Category II – is an Alternate investment fund (AIF) that does not fall in Category I and III and which does not undertake leverage or borrowing other than to meet day-to-day operational requirements or as permitted in the Regulations. For this purpose, AIFs such as private equity funds or debt funds for which no specific incentives or concessions are given by the government or any other Regulator are included under this Category."
        },
        {
            q: "What does it mean by 'Fallen Angels'?",
            o: ["These are Structured Securities", "These are Distressed Securities", "Equity of Angle Investors", "Shares which are trading at their 52 week (Yearly) low"],
            a: "These are Distressed Securities",
            e: "Distressed securities are the securities of the companies that are in financial distress or near bankruptcy. These securities are also referred to as ‘fallen angels’ and many types of funds and institutional investors are prohibited from holding these securities because of the high risk involved."
        },
        {
            q: "A Nifty futures contract is stated as : FUTIDX NIFTY 26 Aug 2021. What is the significance of the date - 26th August 2021?",
            o: ["Its the midpoint of start and end date of this contract", "Its the trading start day", "It is the contract expiry date", "It has not significance. Its just an arbitrary date fixed by the derivatives exchange"],
            a: "It is the contract expiry date",
            e: "FUTIDX is futures on Indices like Nifty. The date signifies the last day ie. the expiry date of the contract."
        },
        {
            q: "In a discretionary services type of Portfolio Management Service, the portfolio is designed by the ___________ .",
            o: ["Portfolio Manager", "Client", "Jointly by the Portfolio Manager and the Client", "Research Analyst"],
            a: "Portfolio Manager",
            e: "There are two types of portfolio management services available. The discretionary portfolio manager individually and independently manages the funds of each investor, whereas the non-discretionary portfolio manager manages the funds in accordance with the directions of the investors."
        },
        {
            q: "Identify the TRUE statement with respect to investors holding shares in physical/paper form.",
            o: ["The shares can be traded in physical form on the stock exchanges but the issuing company will have to inform SEBI about it", "As per SEBI regulations, if an investor has more than 1000 shares of a company, he /she can hold them in physical form", "If the shares of company are held in physical form, it does not give any legal rights to the holder", "Investors can hold shares in physical form but they have to be dematerialised before selling on a stock exchange"],
            a: "Investors can hold shares in physical form but they have to be dematerialised before selling on a stock exchange",
            e: "As per SEBI rules - In order for a security to be eligible to trade in the secondary markets, it should be held in electronic or dematerialised form. Therefore, even if a security is held in physical form, it has to be dematerialised before selling on a stock exchange."
        },
        {
            q: "While making an application for registration as Portfolio Management Service (PMS), detailed information on which of these need NOT be provided?",
            o: ["Compliance officer", "HR Officer", "Key management personnel", "Principal officer"],
            a: "HR Officer",
            e: "Registration requirements of a Portfolio Manager - Particulars of all Directors/ Partners, Key Management Personnel, Particulars of Promoters, Particulars of Compliance Officer, Particulars of Principal Officer [Name; Address; Qualification; Date of Appointment; DIN; PAN (Copy of PAN Card); Telephone No.; Mobile; Email] Area of work, nature of work, experience in years, shareholdings etc., Information of the total number of employees and number of employees for Portfolio Management services, Name and activities of associate companies/ entities List of major shareholders/ partners of the Applicant (holding 5% or more voting rights)."
        },
        {
            q: "Identify which of these is an example of ethical action by an investment adviser?",
            o: ["An investment adviser is advising his client on how to maximise his returns", "An investment adviser is advising his client on how to bypass laws that will save him money", "An investment adviser giving the same degree of attention to a large client and a small client", "All of the above"],
            a: "An investment adviser giving the same degree of attention to a large client and a small client",
            e: "Ethics can be defined as several moral principles that decide and influence a person’s behaviour. Widely acknowledged fundamental ethical principles include honesty, fairness, diligence, care and respect for others. An investment adviser giving the same degree of attention to a large client and a small client is an example of ethical action because it demonstrates fairness, impartiality, and professional integrity, ensuring that all clients receive equal and unbiased advice."
        },
        {
            q: "A 6 year G-Sec has 4 months to maturity. This security will be classified as _______ .",
            o: ["Long term bond", "Short term bond", "Money market security", "None of the above"],
            a: "Money market security",
            e: "Debt securities that are to mature within a year are called money market securities. G-Secs is a collective term for these two type of securities: maturities less than 1 year are called T-bills (Treasury Bills) and those more than one year are called bonds. On the basis of term to maturity, bonds with a year or less than a year maturity are termed as money market securities. Long-term obligations with maturities in excess of 1 year, are referred to as capital market securities. Thus, long term bonds as they move towards maturity become money market securities."
        },
        {
            q: "In what form are the holdings of an investor in a Alternative Investment Fund (AIF) denoted?",
            o: ["Shares", "Units", "Bonds", "Any of the above as per the type of AIF"],
            a: "Units",
            e: "Alternative Investment Fund raise funds from any investor whether Indian, foreign or non-resident Indians by way of issue of units."
        },
        {
            q: "Whose name will be included in the Register of Members (RoM) of the company when a share is dematerialised?",
            o: ["The name of the investor", "The name of the Depository", "The name of the Stock Broker", "The name of the Depository Participant"],
            a: "The name of the Depository",
            e: "During the process of dematerialisation, in the Register of Members (RoM) of the company, the depository’s name is included in the place of the investor to the extent of securities dematerialised. Once the RoM of the company is amended, confirmation is sent to the depository and the investor’s account with the DP is credited with the number of dematerialised shares."
        },
        {
            q: "The investment objective of an investor in the Consolidation Phase is likely to be _______ .",
            o: ["Regular Income", "Capital Preservation", "Capital Appreciation", "Tax Planning"],
            a: "Capital Preservation",
            e: "The consolidation or mid-to-late-career stage of the typical life cycle is characterized by the period when income exceeds expenses. As a result, this stage is characterized by the consolidation of investment portfolio. At this time, while the time horizon to retirement is still relatively long (15 or 20 years), investors may start looking for capital preservation. High capital gain investments are balanced with some lower-risk assets."
        },
        {
            q: "How is the market risk in a portfolio measured?",
            o: ["Market risk in a portfolio measured by R Square", "Market risk in a portfolio measured by Alpha", "Market risk in a portfolio measured by Beta", "Market risk in a portfolio measured by Theta"],
            a: "Market risk in a portfolio measured by Beta",
            e: "Market risks arise due to the fluctuations in the prices of equity shares due to various market related dynamics. These factors affect all investments irrespective of their business sector. The degree of impact may be different. Market risk is measured by Beta."
        },
        {
            q: "What is the period for which Treasury Bills (T-Bills) are issued?",
            o: ["T-Bills are issued for a period ranging from 60 days to 365 days", "T-Bills are issued for a period ranging from 31 days to 364 days", "T-Bills are issued for a period ranging from 91 days to 364 days", "T-Bills are issued for a period ranging from 1 year to 3 years"],
            a: "T-Bills are issued for a period ranging from 91 days to 364 days",
            e: "The central government issues treasury bills for different maturities such as 91 days, 182 days and 364 days."
        },
        {
            q: "Calculate the coupon yield of bond which pays a coupon of Rs 7 on a face value of Rs.100 and the market price of it is Rs.103.",
            o: ["7%", "5.09%", "8.55%", "6.79%"],
            a: "7%",
            e: "The Coupon yield is the coupon payment as a percentage of the face value. Coupon yield = Coupon Payment / Face Value. 7/100 = 0.07 x 100 = 7% (Note - Coupon yield is different from Current yield. Current yield = (Annual coupon rate / Current market price of the bond) *100%"
        },
        {
            q: "An individual Investment adviser cannot offer a client both advisory and ________ services",
            o: ["Fund advisory", "Retirement planning", "Dummy", "Distribution"],
            a: "Distribution",
            e: "As per SEBI regulations, an individual investment adviser cannot offer both advisory and distribution services to the same client, to avoid conflict of interest."
        },
        {
            q: "Are all primary market issues compulsorily public issues ?",
            o: ["Yes", "No"],
            a: "No",
            e: "All primary market issues need not be public issues. A primary issue of securities is made to promoters when a company is set up and equity shares are issued to them; if bonds are issued to institutions that lend to a company, that is also a primary issue, but issued privately only to a select set of investors."
        },
        {
            q: "Exchange Traded Funds (ETFs) are _________ investments.",
            o: ["Alternative", "New age", "General", "Traditional"],
            a: "Traditional",
            e: "Traditional investments (as distinguished from savings in bank deposits, government schemes, ornamental gold and residential property for living purposes) are confined to the domain of financial securities such as stocks and bonds from primary and secondary capital market, purchase of general categories of mutual fund units and Exchange Traded Funds (ETFs)."
        },
        {
            q: "The interest rate risk in a debt fund will depend on _______ .",
            o: ["The credit quality of the portfolio", "The coupon of the securities", "The tenor of securities", "None of the above"],
            a: "The tenor of securities",
            e: "The price of the bond is inversely related to the interest rate movement. If the interest rate rises, the price of the bond will fall. Long term debt funds have a longer maturity and therefore, higher interest rate risk as compared to short term debt funds."
        },
        {
            q: "The investment of funds by insurance companies is regulated by the norms laid down by ___________ .",
            o: ["Insurance Regulatory and Development Authority of India (IRDAI)", "RBI for debt investments and SEBI for equity investments", "Securities and Exchange Board of India", "Ministry of Finance"],
            a: "Insurance Regulatory and Development Authority of India (IRDAI)",
            e: "The Insurance Regulatory and Development Authority of India (IRDAI) regulates the insurance sector including registering insurance companies, clearing insurance products, licensing and establishing norms for the intermediaries and protecting policy holders’ interest."
        },
        {
            q: "Which of the following is not a part of the financial planning process?",
            o: ["Develop financial planning recommendations", "Setting goals", "Monitoring", "Financing the investments"],
            a: "Financing the investments",
            e: "Financial planning aims at ensuring that a household or individual has adequate income or resources to meet current and future expenses and needs. Financing the investments is not a part of the financial planning process."
        },
        {
            q: "Integrated Grievance Management System is for solving complaints related to _______ .",
            o: ["Insurance", "Pension", "Stocks", "Mutual funds"],
            a: "Insurance",
            e: "If insurance related grievance is not addressed satisfactorily then it can be escalated to IRDAI through the IGMS. IRDAI offers the facility of online registration of policy holders’ complaints through its Integrated Grievance Management System (IGMS) in its website."
        },
        {
            q: "A forward contract ___________ the uncertainty of price for both the buyer and the seller.",
            o: ["Increases", "Reduces", "Has no effect on", "Has marginal effect on"],
            a: "Reduces",
            e: "A forward contract is a financial agreement between two parties to buy or sell an asset at a predetermined price on a future date. This helps both the buyer and the seller reduce the risk of price fluctuations in the future, thus providing certainty and hedging against adverse price movements."
        },
        {
            q: "Among the following, which type of investment decision is taken more frequently?",
            o: ["Classifying investors using psychographic analysis", "Selecting individual assets for a portfolio", "Strategic asset allocation", "Tactical asset allocation"],
            a: "Tactical asset allocation",
            e: "Tactical asset allocation decisions are taken more frequently because they involve adjusting portfolio weights based on market conditions, economic trends, and short-term opportunities. Classifying investors using psychographic analysis - Typically done once or infrequently, unless the investor’s profile changes significantly. Selecting individual assets for a portfolio - Done as part of the investment process, but not necessarily as frequently as tactical shifts. Strategic asset allocation - Long-term decision, typically reviewed annually or less often."
        },
        {
            q: "What is the correct sequence of the investment process as guided by the Investment Policy Statement (IPS)?",
            o: ["Investment objectives → Asset allocation → Investments", "Investments → Asset allocation → Investment objectives", "Asset allocation → Investment objective → Investments", "The sequence is adaptable based on the specific investment goal"],
            a: "Investment objectives → Asset allocation → Investments",
            e: "The Investment Policy Statement (IPS) provides a structured framework for the investment process. The correct sequence it enables is: 1. Investment Objectives: Define the investor's goals, risk tolerance, time horizon, and return expectations. 2. Asset Allocation: Based on the objectives, determine the appropriate mix of asset classes (equity, debt, etc.). 3. Investments: Select specific securities or products within each asset class to implement the asset allocation strategy. This logical flow ensures that investments are aligned with the investor’s long-term goals and risk profile."
        },
        {
            q: "What is the significance of the 'Client First' principle in ethical investment advisory?",
            o: ["It helps advisors in avoiding compliance-related scrutiny", "It enables advisors to bypass thorough analysis in their recommendations", "It guarantees profitability for advisors", "It reinforces trust by prioritizing the client's best interests over the advisor's personal gains"],
            a: "It reinforces trust by prioritizing the client's best interests over the advisor's personal gains",
            e: "The 'Client First' principle is a cornerstone of ethical conduct for investment advisors because it ensures that advisors always act in the best interest of their clients, placing their needs and goals above any personal or financial incentives the advisor might have. By following this principle, advisors build strong trust with their clients, which is essential for long-term success in the advisory profession."
        },
        {
            q: "Which parties enter into a listing agreement for securities?",
            o: ["The Stock exchange and the Depository", "The Issuer and the Depository", "The Issuer and SEBI", "The Issuer and the Stock exchange"],
            a: "The Issuer and the Stock exchange",
            e: "A listing agreement is a legally binding agreement signed between a company (issuer) and the stock exchange where it wants to list its securities. This agreement outlines the terms, conditions, and ongoing disclosure requirements the issuer must follow to remain listed on the exchange."
        },
        {
            q: "What is different when comparing a Direct plan and a Regular plan of the same mutual fund?",
            o: ["The Net Asset Value (NAV)", "The expense ratio charged", "The returns generated", "All of these factors"],
            a: "All of these factors",
            e: "In Direct plans, investors can buy the fund directly from the AMCs bypassing financial intermediaries. Those being purchased and sold via intermediaries/mutual fund agents are categorized as Regular plans. - Net Asset Value (NAV): The NAV of a direct plan is typically higher than that of a regular plan due to lower expense deductions. - Expense Ratio: A regular plan has a higher expense ratio because it includes distributor commissions, while a direct plan has a lower expense ratio as it is purchased directly from the fund house. - Returns: Since a direct plan has lower expenses, its returns tend to be slightly higher compared to a regular plan over time."
        },
        {
            q: "The money market instruments which has the shortest tenor is ___________ .",
            o: ["Term money", "Cash management bills", "Call money", "Notice money"],
            a: "Call money",
            e: "The duration / tenor of some money market instruments are as under : Call Money – Overnight, Notice Money – 2 to 14 days, Term Money – 15 days to 1 year, Cash Management Bills (CMB) – Upto 90 days."
        },
        {
            q: "Identify which of these is NOT a characteristic feature of a benchmark?",
            o: ["A Benchmark should be investible", "A Benchmark should cover all the possible securities and sectors in the market", "The constituents of a benchmark should be clearly defined", "The risk-return profile of the benchmark should be similar to that of the portfolio compared"],
            a: "A Benchmark should cover all the possible securities and sectors in the market",
            e: "A good benchmark should be able to satisfy the following criteria – The identity of constituents and their weights in the benchmark are clearly defined, The benchmark is investable, in other words it is possible to have a passive exposure to the same, The benchmark is consistent with the portfolio’s investment approach, The benchmark is having the same risk-return profile as the portfolio, The performance of the benchmark is measurable."
        },
        {
            q: "The output of fundamental analysis of an equity share is its Book Value - State whether True or False?",
            o: ["True", "False"],
            a: "False",
            e: "The output of fundamental analysis of an equity share is its Intrinsic Value. Fundamental analysis is the process of determining Intrinsic Value for the stock. These values depend on underlying economic factors such as future earnings or cash flows, interest rates, and risk variables. By examining these factors, intrinsic value of the stock is determined. Investor should buy the stock if its market price is below intrinsic value and do not buy, or sell, if the market price is above the intrinsic value."
        },
        {
            q: "What does Financial Planning recommend?",
            o: ["Financial Planning recommends the asset allocation that is best suited to reduce the risk for the investor", "Financial Planning recommends the asset allocation that can generate the best returns for the investor", "Financial Planning recommends the asset allocation best suited for investor's needs", "Financial Planning recommends the asset allocation that will help the investor meet goals in the shortest period"],
            a: "Financial Planning recommends the asset allocation best suited for investor's needs",
            e: "Financial planning is a process that enables better management of the personal financial situation of a household or individual. It works primarily through the identification of key goals and putting in place an action plan to realign the finances to meet those goals. The plan includes asset allocation which decides on how to distribute an investor’s wealth into different asset classes for investment purposes and according to his needs."
        }
    ],
    test6: [],
    test7: []
};
