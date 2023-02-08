var documenterSearchIndex = {"docs":
[{"location":"#StatisticalGraphics.jl","page":"Introduction","title":"StatisticalGraphics.jl","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Welcome to the StatisticalGraphics.jl documentation!","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This resource aims to teach you everything you need to know to get up and running with the StatisticalGraphics.jl package.","category":"page"},{"location":"#Package-manual","page":"Introduction","title":"Package manual","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Pages = [\n          \"man/scatter.md\"]\nDepth = 2","category":"page"},{"location":"man/scatter/#Scatter","page":"Examples","title":"Scatter","text":"","category":"section"},{"location":"man/scatter/#Basic","page":"Examples","title":"Basic","text":"","category":"section"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"using InMemoryDatasets, StatisticalGraphics\n\nds = Dataset(x=[1.1, 1.5, 2.7, 3.1], y=[1.1, -3.4, 2.1, 2.55], g=['A', 'B', 'A', 'B'])\n\nsgplot(ds, Scatter(x=:x, y=:y))","category":"page"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"By passing group=:g a different outline color will be assigned to each point.","category":"page"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"using InMemoryDatasets, StatisticalGraphics\n\nds = Dataset(x=[1.1, 1.5, 2.7, 3.1], y=[1.1, -3.4, 2.1, 2.55], g=['A', 'B', 'A', 'B'])\n\nsgplot(ds, Scatter(x=:x, y=:y, group=:g))","category":"page"},{"location":"man/scatter/#Customising-the-points","page":"Examples","title":"Customising the points","text":"","category":"section"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"using InMemoryDatasets, StatisticalGraphics\n\nds = Dataset(x=[1.1, 1.5, 2.7, 3.1], y=[1.1, -3.4, 2.1, 2.55], g=['A', 'B', 'A', 'B'])\n\nsgplot(ds, Scatter(x=:x, y=:y, group=:g, size=500, thickness=3))","category":"page"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"Using different symbol for each group","category":"page"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"using InMemoryDatasets, StatisticalGraphics\n\nds = Dataset(x=[1.1, 1.5, 2.7, 3.1], y=[1.1, -3.4, 2.1, 2.55], g=['A', 'B', 'A', 'B'])\n\nsgplot(ds, Scatter(x=:x, y=:y, group=:g, size=500, thickness=3, symbolresponse=:g))","category":"page"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"Removing the oultine and fill the symbols with solid color","category":"page"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"using InMemoryDatasets, StatisticalGraphics\n\nds = Dataset(x=[1.1, 1.5, 2.7, 3.1], y=[1.1, -3.4, 2.1, 2.55], g=['A', 'B', 'A', 'B'])\n\nsgplot(ds, Scatter(x=:x, y=:y, size=500, thickness=0, color=:steelblue, symbolresponse=:g))","category":"page"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"Scatter plot of iris data","category":"page"},{"location":"man/scatter/","page":"Examples","title":"Examples","text":"using InMemoryDatasets, DLMReader, StatisticalGraphics\n\niris = filereader(joinpath(dirname(pathof(StatisticalGraphics)),\n                                 \"..\", \"docs\", \"assets\", \"iris.csv\"))\nsgplot(iris, Scatter(x=:PetalLength, y=:SepalLength, group=:Species, thickness=3), wallcolor=:lightgray)","category":"page"}]
}