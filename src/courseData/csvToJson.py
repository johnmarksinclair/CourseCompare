#import py packages to read csv file and write json file
import csv, json

csvFilePath = 'PG-2122-Fees-updated-04.02.21.csv'
jsonFilePath = 'courseData.json'

#read CSV File and add the data to a dictionary
data ={}
with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        ID = rows['ID']
        data[ID] = rows

#test working data input
#print(data)

#Creat new Json file and write the data onto it
with open(jsonFilePath, 'w', newline="") as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))
