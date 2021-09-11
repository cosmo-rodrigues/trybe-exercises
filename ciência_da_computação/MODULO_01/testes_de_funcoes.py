import csv
with open('jobs.csv', 'rb') as csvfile:
    pamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
    for row in pamreader:
        print (', '.join(row))
