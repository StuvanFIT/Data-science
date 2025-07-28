## Dimensions and Measures

Tableau identifies each field as a dimension or measure in the Data pane, depending on the type of data the field contains. You use these fields to build your analysis.

Data fields are made from the columns in your data source. Each field is automatically assigned a data type such as integer, string, or date, and a role: a discrete dimension or continuous measure (or less commonly, a continuous dimension or discrete measure).

Dimensions group or segment the data. Dimensions typically contain qualitative values (such as names, dates, or geographical data). You can use dimensions to categorize your data. Dimensions affect the level of detail in the view.

Measures are aggregated. Measures typically contain numeric, quantitative values that you can measure. When you drag a measure into the view, Tableau applies an aggregation on the field.
To learn more about aggregation, see List of Predefined Aggregations in Tableau and Aggregate Functions in Tableau.

So in summary:
-Dimensions: Categorical fields that describe "what" your data is about.
i.e.: names, dates, geographies, categories
-Measures : Quantitative field that can be aggregated (summed, averaged) like Sales, Profit, Quantity, Discount, Population


## Blue and Green Fields
Green: continuous field.

Blue: discrete field.

## Measure Names and Measure Values
![alt text](./images/image.png)
CNT(FIT3179_World_Population...)	Count of rows in the dataset. Tableau is auto-counting records.
SUM(Population)	The total population (summed across your dimension, like year/country).
SUM(Year)	The sum of the year values. Often not useful and can be misleading unless you’re counting events per year (usually we group by year, not sum it).

These appear because Tableau includes all numeric fields (or aggregatable fields) in Measure Values unless you manually filter them using the Measure Names filter (which you already added on the left)