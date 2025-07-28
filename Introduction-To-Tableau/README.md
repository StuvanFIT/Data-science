We should be able to see that there is a problem with the way Tableau interpreted the dataset.
There are some columns of the data that are not recognised (F1, F2, F3, etc.). Because you might not be able to
edit the original Excel data on Tableau, you need to make sure your data is clean before importing
it.

So, we need to clean up the data by deleting those null rows and columns in our original excel/csv file.

![alt text](./images/image.png)

Q: Is there any faster way to clean up the datasets in TableAU?
A: Pivoting, filtering or using the tableau source page.

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



## Dataset shape and reshaping
![alt text](./images/image-1.png)

The shape of this dataset is not suitable for analysis:
- Each year is treated as a separate column.
- Tableau works best with long format data, where each row represents a single observation and years are values in a single column.

![alt text](./images/image-2.png)

Dataset reshaping: [Cleaning and Reshaping your datasets](https://www.tableau.com/learn/get-started/data-structure)
Pivot data from Column to Rows: [Pivot data from Column to Rows:](https://help.tableau.com/current/pro/desktop/en-us/pivot.htm)


## Measure Names and Measure Values
![alt text](./images/image-0.png)
CNT(FIT3179_World_Population...)	Count of rows in the dataset. Tableau is auto-counting records.
SUM(Population)	The total population (summed across your dimension, like year/country).
SUM(Year)	The sum of the year values. Often not useful and can be misleading unless you’re counting events per year (usually we group by year, not sum it).

These appear because Tableau includes all numeric fields (or aggregatable fields) in Measure Values unless you manually filter them using the Measure Names filter (which you already added on the left)


## What are the advantages of using a stacked bar chart in this scenario?
- A stacked bar chart clearly shows defined individual segments that represent each year and how all the individual segments contribute to
a total value (i.e. the population), so the entire stacked bar is the total population but we can observe the populations in each year for that country.
- Shows how much each year contributes to the population
- Saves space and becomes more compact
- Easier for the human eye to intuitively compare total population across countries based on height
- Easier to compared populations in specific years (i.e. If India's 2010 population is much larger than 2006, the stack shows that visually with a taller segment).

## What are the disadvantages of using a stacked bar chart in this scenario?
- Be hard to read when you want to compare individual segments (e.g., compare only 2010 population across all countries). since they dont have the same "base point level"
- Not great for showing trends over time
- The reliance on COLOUR is needed. If the colorrs are too similar or the segments too small: it’s hard to tell them apart,  creates accessibility issues for color-blind users

## When to use
“Which countries had the highest total population over multiple years?”

“How much did each year contribute to a country’s total population?”

“Did a country's population grow, shrink, or stay the same over time?”


## TableAU warning message
![alt text](./images/image-3.png)

This warning is telling you that you're about to add a field to a shelf (like Columns, Rows, or Color) that contains up to 263 distinct values, but Tableau recommends no more than 20 for optimal performance and readability.

Why it matters alot:
- Performance: too many members can slow down rendering and make the visualisation sluggish.
- Charts with hundreds of categories (e.g., 263 countries or regions) can be hard to read and interpret.
- Tableau tries to keep visualisations clean and effective, so it flags when you're likely to overwhelm the view. Clean visualisations are better for user experience and analysis.