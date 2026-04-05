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
            q: "A company issues bonds through a public issue. In such a case which of these is mandatory?", 
            o: ["Minimum tenor of five years", "Bonds must be listed on a stock exchange", "Company already listed on an exchange", "All of the above"], 
            a: "Bonds must be listed on a stock exchange", 
            e: "Debentures or bonds issued under a public offer are mandatorily required to be listed on a stock exchange." 
        },
        { 
            q: "To know the costs and fees associated with a PMS, an investor must read the ________ .", 
            o: ["Disclosure document", "Scheme offer document", "Scheme Information Document", "Fact Sheet"], 
            a: "Disclosure document", 
            e: "The Portfolio Manager is required to provide the client with a Disclosure Document detailing the range of fees charged for various services." 
        }
    ],
    test2: [
        { q: "The process of settling the obligations of buyer and seller in trade of securities is known as ________.", o: ["Clearing", "Settlement", "Trading", "Hedging"], a: "Settlement", e: "After the trade is executed on the secondary market, the buyer has a payment obligation and the seller has a delivery obligation. Settlement is the mechanism of settling the obligations of counter parties in a trade. [cite: 1]" },
        { q: "Who creates the Mutual Fund products?", o: ["Trustees", "Asset Management Company", "SEBI", "Sponsor"], a: "Asset Management Company", e: "Asset Management Companies are investment specialists who offer their services in selecting and managing a portfolio of securities. They create various products / schemes and offer them for investment. [cite: 1]" },
        { q: "What is the minimum return guaranteed under National pension system (NPS)?", o: ["7.5%", "8.25%", "As per current PF rates", "Returns are not guaranteed"], a: "Returns are not guaranteed", e: "Returns are not guaranteed under the NPS. [cite: 1]" },
        { q: "Identify the regulatory constraints for investors resident in India. A.Access to information that is not publicly known B.Investment in overseas markets", o: ["Only A", "Only B", "Both A and B", "Neither A nor B"], a: "Both A and B", e: "Investors are prohibited from trading on non-public information (Insider Trading) and face limits on overseas investments under the LRS scheme. [cite: 1]" },
        { q: "Who is considered as a 'Ward' under the Guardians and Wards Act?", o: ["All minors", "A minor with a guardian for person/property", "A minor with court-appointed guardian", "Any person with court guardian"], a: "A minor with a guardian for person/property", e: "A ward is specifically a minor for whom a guardian has been appointed for their person or property. [cite: 1]" },
        { q: "Which is true about the Execution-only model of offering financial services?", o: ["Identifying suitable products", "Providing products for diverse needs", "Charging a fee from investor", "All of the above"], a: "Providing products for diverse needs", e: "In an execution-only model, the intermediary's job is simply to offer a platform; the investor makes their own choices and no advice is given. [cite: 1]" },
        { q: "Alternative investments are used as an alternate source of capital by which identities?", o: ["Blue chip companies", "High promoter shareholding", "Working capital intensive businesses", "Businesses finding it difficult to tap traditional sources"], a: "Businesses finding it difficult to tap traditional sources", e: "AIFs provide capital to businesses that find it difficult to tap traditional sources of growth capital. [cite: 1]" },
        { q: "Which is an example of an investment decision for easing tax constraints? A. Investments in Sovereign Gold Bond scheme for asset allocation to gold B. Choosing the growth option along with Systematic Withdrawal Plan in a debt fund for regular income", o: ["Only A", "Only B", "Both A and B", "Neither A nor B"], a: "Only B", e: "Choosing growth options in debt funds can be more tax-efficient than receiving regular dividends. [cite: 1]" },
        { q: "The interest paid on ________ is re-set periodically as per the current inflation rates.", o: ["Junk Bonds", "Infrastructure Bonds", "Inflation Indexed Bonds", "Deep Discount Bonds"], a: "Inflation Indexed Bonds", e: "These bonds do not have a fixed rate; the interest changes based on inflation to protect real returns. [cite: 1]" },
        { q: "How are the payoffs in an options position for bullish and bearish markets?", o: ["The payoffs are Symmetrical", "The payoffs are Asymmetrical", "The payoffs are Random", "The payoffs are Elliptical"], a: "The payoffs are Asymmetrical", e: "Option contracts feature asymmetric pay-offs where upside and downside potential are not uniform. [cite: 1]" },
        { q: "The Stock Exchanges have daily price band for individual stocks at 2%, 5%, 10% or 20% depending on ________ .", o: ["Public and Private shareholding", "Price Levels", "Volatility", "All of the above"], a: "Volatility", e: "Stock exchanges impose price bands on individual securities to limit volatility in prices. [cite: 1]" },
        { q: "Once the New Fund Offer (NFO) closes, the open-ended mutual funds are ________ .", o: ["Available for purchase and sale only on the stock exchanges", "Not available for any further purchases", "Available for purchase only for the existing investors", "Available for purchase for both - new and existing investors"], a: "Available for purchase for both - new and existing investors", e: "After an NFO closes, open-ended funds allow both new and existing investors to buy units on an ongoing basis. [cite: 1]" },
        { q: "The coupon rate in a public issue of debentures ________ .", o: ["It is fixed by SEBI", "Is determined through a RBI auction", "Is determined through a book building process", "It is fixed by the stock exchange on which it will be listed"], a: "Is determined through a book building process", e: "The issuer, in consultation with lead managers, typically uses a book-building process to determine the coupon. [cite: 1]" },
        { q: "What type of derivatives are 'Forwards'?", o: ["Perpetual", "Exchange Traded", "Over The Counter (OTC)", "Standardised"], a: "Over The Counter (OTC)", e: "Forwards are private agreements traded directly between two parties, not on an exchange. [cite: 1]" },
        { q: "Diversification in a portfolio has the biggest impact on ________ .", o: ["Market risk", "Transactional risk", "Company specific risk", "All of the above"], a: "Company specific risk", e: "Company-specific (unsystematic) risk can be diversified away; market risk cannot. [cite: 1]" },
        { q: "Identify the TRUE statement with respect to information provided in the disclosure document of a portfolio management scheme (PMS).", o: ["Information in disclosure document depends on agreement", "Information specified by regulations", "Information specified by stock exchanges", "Information decided by each PMS provider"], a: "Information specified by regulations", e: "The Portfolio Manager is required by regulations to provide a Disclosure Document containing specified particulars. [cite: 1]" },
        { q: "Money market instruments have a maturity of ________ .", o: ["Less than 3 years", "Less than 1 year", "1 to 5 years", "Overnight only"], a: "Less than 1 year", e: "Money markets deal with short-term instruments with maturities of less than one year. [cite: 1]" },
        { q: "Which portfolio is the appropriate benchmark for comparison in the 'Peer Group' analysis method of performance evaluation ?", o: ["Mean values of portfolios", "Support percentile portfolio", "Median portfolio", "Average percentile portfolio"], a: "Median portfolio", e: "The median portfolio is the standard benchmark used in peer group universe analysis. [cite: 1]" },
        { q: "Which body creates sectoral indices for banking, pharma, etc.?", o: ["Ministry of Finance", "Stock Exchanges", "SEBI", "Ministry of Corporate Affairs"], a: "Stock Exchanges", e: "Sectoral indices are created by stock exchanges to allow tracking of specific industry sectors. [cite: 1]" },
        { q: "Identify which feature of a securities transaction provides it with regulatory jurisdiction of central government?", o: ["Monetary transaction", "Transaction between persons", "Transaction between individual entities", "All of the above"], a: "All of the above", e: "The SCRA gives the Central Government jurisdiction over stock exchanges and contracts in securities between persons. [cite: 1]" },
        { q: "On whom are the SEBI Anti-Money laundering guidelines applicable?", o: ["Intermediaries with products but not liabilities", "Intermediaries in stock markets", "Intermediaries receiving/paying funds", "All SEBI registered intermediaries"], a: "All SEBI registered intermediaries", e: "SEBI AML standards apply to all intermediaries registered with the board. [cite: 1]" },
        { q: "A 'Straight Arrow' investor is a/an ________ investor.", o: ["Confident and careful", "Well balanced", "Anxious and careful", "Anxious and impetuous"], a: "Well balanced", e: "Straight-arrow investors are so well-balanced they cannot be placed in a specific quadrant of the BB&K model. [cite: 1]" },
        { q: "Which is the first line of action for an investor looking for grievance redressal?", o: ["Contact SEBI via SCORES", "Contact investment adviser", "Contact the regulator", "Contact the product / service provider"], a: "Contact the product / service provider", e: "The first step in grievance redressal is always to contact the product or service provider directly. [cite: 1]" },
        { q: "Identify the important function(s) of the banking system in an economy?", o: ["Guarantees funds", "Provides returns to investors", "Provides credit at efficient cost", "All of the above"], a: "Provides credit at efficient cost", e: "Banks act as intermediaries to provide credit at reasonable and efficient costs to seekers. [cite: 1]" },
        { q: "When are the terms of a Forward contract agreed upon?", o: ["Settlement date", "Date they enter into contract", "Expiration date", "First day of financial year"], a: "Date they enter into contract", e: "Terms for a forward contract are decided 'today'—the date the parties enter into the contract. [cite: 1]" },
        { q: "What is the primary benefit of the foreign exchange market to an importer?", o: ["Speculation to reduce costs", "Hedge risk of currency movement", "Exploit arbitrage", "All of the above"], a: "Hedge risk of currency movement", e: "FX markets allow importers to hedge against the risk of adverse currency movements. [cite: 1]" },
        { q: "________ manages the operational and regulatory aspects of the public offer of shares.", o: ["Registrar and transfer agents", "Underwriters", "Lead mangers", "Bankers"], a: "Lead mangers", e: "Lead managers ensure compliance with all regulatory and operational requirements for a public issue. [cite: 1]" },
        { q: "In what way does the secondary market price affect primary market capital raising?", o: ["Indication of price level for new capital", "Promoters sell shares to raise funds", "No effect on capital raising"], a: "Indication of price level for new capital", e: "The secondary market provides price identification that supports capital raising in the primary market. [cite: 1]" },
        { q: "Which among these is NOT a valid PMS classification?", o: ["Commodity PMS", "Forex PMS", "Equity PMS", "Fixed income PMS"], a: "Forex PMS", e: "There is no recognized product class for Forex PMS under standard classifications. [cite: 1]" },
        { q: "Which statements assess an investor's ability to save and invest?", o: ["Net worth statement", "Bank Statement", "Cash Flow Statement", "Income and Expenses statement"], a: "Income and Expenses statement", e: "The Income and Expense statement shows the surplus available periodically for investment. [cite: 1]" },
        { q: "Which variables affect portfolio risk?", o: ["Weights of Investments", "Co-movement", "Risk of Investments", "All of the above"], a: "All of the above", e: "Portfolio risk considers individual investment risk, weights, and the correlation (co-movement) between them. [cite: 1]" },
        { q: "Is an adviser helping in platform selection for execution ethical?", o: ["Ethical as it helps investor", "Ethical if adviser has own platform", "Unethical as it shifts responsibility", "Unethical per IA regulations"], a: "Unethical per IA regulations", e: "SEBI IA regulations require strict segregation between advisory and execution activities. [cite: 1]" },
        { q: "Which mutual fund schemes must be mandatorily listed on the exchange?", o: ["All Equity schemes", "All Debt schemes", "Open Ended schemes", "Closed Ended schemes"], a: "Closed Ended schemes", e: "Closed-ended schemes must be listed to provide liquidity to investors who wish to exit. [cite: 1]" },
        { q: "Is ethics just following legal requirements?", o: ["Correct", "Incorrect - legal is complex", "Incorrect - ethics deals with morals", "Incorrect - must follow all laws"], a: "Incorrect - ethics deals with morals", e: "Ethics involves principles and values that often go beyond basic legal compliance. [cite: 1]" },
        { q: "________ is the market for first-time issuance of securities.", o: ["Money Market", "Forward Market", "Secondary Market", "Primary Market"], a: "Primary Market", e: "The primary market is where issuers raise capital by issuing securities to investors for the first time. [cite: 1]" },
        { q: "In a fund of funds, the portfolio consists of –", o: ["Units of other schemes", "Derivatives", "Debt securities", "Equity instruments"], a: "Units of other schemes", e: "A Fund of Funds (FoF) portfolio primarily consists of units of other mutual fund schemes. [cite: 1]" },
        { q: "In an 'Ethical dilemma', what is the nature of the options?", o: ["Any of them would be suitable", "All of them are proper to be chosen", "All the options are such that they would lead to some ethical violation", "There are no implications of choosing any one"], a: "All the options are such that they would lead to some ethical violation", e: "An ethical dilemma involves choosing between alternatives that both involve some form of violation. [cite: 1]" },
        { q: "A derivative's value is derived from ________ .", o: ["Some other asset", "Itself", "Demand", "Traded prices"], a: "Some other asset", e: "Derivatives derive their value from underlying assets like equity, debt, or commodities. [cite: 1]" },
        { q: "A positive relationship between return and risk is consistent with ________ .", o: ["risk seekers", "risk neutral", "risk averse", "None"], a: "risk averse", e: "Risk-averse investors demand higher expected returns for accepting higher risk levels. [cite: 1]" },
        { q: "If you can't sell 10,000 shares when volume is 800, this is ________ risk.", o: ["Market", "Sector specific", "Transactional", "Liquidity risk"], a: "Liquidity risk", e: "Liquidity risk is the inability to find buyers or sellers for a position quickly at the market price. [cite: 1]" },
        { q: "What constitutes an ethical breach between advisor and client?", o: ["Concealing conflicts", "Misleading recommendations", "Favoring personal commissions", "All of the above"], a: "All of the above", e: "Fiduciary duty is violated by concealing conflicts, providing biased advice, or favoring personal gain. [cite: 1]" },
        { q: "Which AIF category is permitted to employ leverage?", o: ["Category I", "Category II", "Category III", "None"], a: "Category III", e: "Category III AIFs are uniquely permitted to use leverage for complex trading strategies. [cite: 1]" },
        { q: "Can a person seek exemption from penalties for fraud if they didn't gain?", o: ["No - regulation doesn't require gain", "No - benefits could materialize later", "Yes - if victim waives", "Yes - if no personal benefit"], a: "No - regulation doesn't require gain", e: "Under SEBI FUTP regulations, fraud is established by the act and intent, regardless of whether a gain occurred. [cite: 1]" },
        { q: "Which instruments are exclusively issued by Central Government?", o: ["Securitized paper", "Certificates of Deposit", "Treasury bills", "Bonds"], a: "Treasury bills", e: "Treasury Bills (T-Bills) are short-term debt instruments issued solely by the Central Government. [cite: 1]" },
        { q: "What describes the core activity of a Private Equity (PE) fund?", o: ["Early-stage funding", "Funding later-stage businesses", "Publicly traded firm focus", "Providing loans"], a: "Funding later-stage businesses", e: "PE funds primarily invest in established, later-stage companies for expansion or restructuring. [cite: 1]" },
        { q: "Which source includes portfolio rebalancing norms?", o: ["GIPS", "Investment Policy Statement", "PMS Regulations", "Scheme document"], a: "Investment Policy Statement", e: "Strategic rebalancing norms to maintain target asset allocation are found in the IPS. [cite: 1]" },
        { q: "At what price can investors buy listed closed-end units after the NFO?", o: ["Lower than NAV", "Higher than NAV", "Traded prices (higher or lower than NAV)", "Cannot be bought"], a: "Traded prices (higher or lower than NAV)", e: "Listed closed-end units trade on an exchange at market prices that may reflect a premium or discount to NAV. [cite: 1]" },
        { q: "What is the minimum AIF scheme corpus as per SEBI?", o: ["Rs 5 crore", "Rs 10 crore", "Rs 15 crore", "Rs 20 crore"], a: "Rs 20 crore", e: "SEBI requires each scheme of an Alternative Investment Fund to have a minimum corpus of at least Rs. 20 crores. [cite: 1]" },
        { q: "Diversification has the biggest impact on ________ risk.", o: ["Company specific risk", "Market risk", "Transactional risk", "All"], a: "Company specific risk", e: "Company-specific (unsystematic) risk is unique to a firm and can be offset through diversification. [cite: 1]" },
        { q: "Money market instruments are ________ .", o: ["volatile", "highly liquid", "overnight maturity only", "issued only by RBI"], a: "highly liquid", e: "Money market instruments are short-term, low-risk, and designed to provide high liquidity. [cite: 1]" }
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
        { q: "________ defines the term \"Securities\".", o: ["SEBI (ICDR) Regulations, 2018", "The Depositories Act, 1996", "Securities Contracts (Regulation) Act 1956", "Securities Contracts (Regulation) Rules, 1957"], a: "Securities Contracts (Regulation) Act 1956", e: "The term \"securities\" is defined in the SCRA 1956." },
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
    test4: [],
    test5: [],
    test6: [],
    test7: []
};
