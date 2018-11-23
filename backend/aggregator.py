#!/usr/bin/python3
from pymongo import MongoClient
import pprint 
import collections
import json
def nested_dict(n, type):
	if n == 1:
		return collections.defaultdict(type)
	else:
		return collections.defaultdict(lambda: nested_dict(n-1,type))



def get_data():
	client = MongoClient("mongodb://localhost:27017/")
	db=client['d4g']
	data = db.sessions.find({})
	data = list(data)

	bg={}
	for record in data:
		#we have a record here
		# pprint.pprint(record) 

		for question in record['history']:
			# pprint.pprint(question) 
			for answer in record['history'][question]:
				# pprint.pprint(answer)
				# pprint.pprint(question)
				if not question in bg:
					bg[question]={}
					# bg[question].append({answer:"0"})
				if not answer in bg[question]:
					bg[question][answer]=0
				bg[question][answer] +=1
				# print(question + answer)
				# print('------------------------------------------------*******************---------------------------')
	return bg
	# pprint.pprint(json.dumps(bg))




