# function to fetch aadhar card details using aadhar number
def get_aadhar_details(aadhar_number):
    # fetch aadhar details from database
    aadhar_details = fetch_aadhar_details(aadhar_number)
    # return aadhar details
    return aadhar_details
    

