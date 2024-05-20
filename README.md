# SourcePro

# List of Endpoints, Associated Parameters, and HTTP Methods

##Endpoints, Attributes, Methods & Descriptions##

#Tenders Endpoints:

GET:/api/tenders
q:                                    Optional search. Lists and searches all tenders. If the q parameter is present, it’s used as a free-text search; otherwise, the endpoint can
term: Optional filtering by term      be used to return lists of tenders by category, and company. Defaults to “all.”

POST:/api/tenders                     Creates a new tender and saves it in the database
                          
GET:/api/tenders:id                   Returns information about a specific tender
 
PUT:/api/tenders/:id                  Updates the information on a tender
 
GET:/api/tenders/:id/bids             Returns all bids submitted for a specific tender.

POST:/api/tenders/:id/bids            Submits a new bid for a specific tender.

DELETE:/api/tenders/:id               Deletes a specific tender from the database.


#Users Endpoints:

#Categories Endpoints:

GET:/api/categories/:cat_id/tenders   Returns all tenders under a specific category.




























