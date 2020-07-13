# Atlassian Facets Demonstration

For this demonstration, we use the Census Income Data Set from the UCI Machine Learning Repository - http://archive.ics.uci.edu/ml/datasets/Census+Income

## Facets-Overview

Overview gives a high-level view of one or more data sets. It produces a visual feature-by-feature statistical analysis, and can also be used to compare statistics across two or more data sets. The tool can process both numeric and string features, including multiple instances of a number or string per feature.

Overview can help uncover issues with datasets, including the following:

- Unexpected feature values
- Missing feature values for a large number of examples
- Training/serving skew
- Training/test/validation set skew

Key aspects of the visualization are outlier detection and distribution comparison across multiple datasets. Interesting values (such as a high proportion of missing data, or very different distributions of a feature across multiple datasets) are highlighted in red. Features can be sorted by values of interest such as the number of missing values or the skew between the different datasets.

![Facet Overview Demo](media/facet-overview.gif)

## Facet-Dive

Dive is a tool for interactively exploring up to tens of thousands of multidimensional data points, allowing users to seamlessly switch between a high-level overview and low-level details. Each example is a represented as single item in the visualization and the points can be positioned by faceting/bucketing in multiple dimensions by their feature values. Combining smooth animation and zooming with faceting and filtering, Dive makes it easy to spot patterns and outliers in complex data sets.

![Facet Overview Dive](media/facet-dive.gif)
