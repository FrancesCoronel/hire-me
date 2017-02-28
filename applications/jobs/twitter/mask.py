# Enter your code here. Read input from STDIN. Print output to STDOUT


def maskEmailAndPhoneNumber(email, phone):
    masked_email = maskEmail(email)
    masked_phone = maskPhone(phone)
    return masked_email, masked_phone

def maskEmail(email):
    pos_of_separater = email.find('@')
    email_name = email[:pos_of_separater]
    email_service_provider = email[pos_of_separater + 1:]
    top = email_name[0]
    last = email_name[-1]
    body = "*****"
    if last == "." or top == "." or "@" in email_service_provider:
        print ("Invalid email")
        return -1
    masked_email = top + body + last + "@" + email_service_provider
    return masked_email

def maskPhone(phone):
    not_maskable = "+0123456789-"
    numbers = "0123456789"
    masked_phone = ""
    for i in phone:
        if i == " ":
            continue
        elif i in not_maskable:
            masked_phone += i
        elif i == '(' or i == ')':
            masked_phone += '-'

    num_count = 0
    completely_masked = ""
    completely_masked_last = masked_phone[-4:]
    for i in range(len(masked_phone[:-4])):
        if masked_phone[i] in numbers:
            completely_masked = completely_masked + "*"
        else:
            completely_masked = completely_masked + masked_phone[i]
    if completely_masked[0] == "-":
        completely_masked = completely_masked[1:]
    completely_masked += completely_masked_last

    return completely_masked

def normalize_input(input1, input2):
    # normalize email and phone number
    if input1[0] == 'E' and input2[0] == 'P':
        # normalize email
        email = normalizeEmail(input1)
        phone = normalizePhone(input2)

    elif input1[0] == 'P' and input2[0] == 'E':
        phone = normalizePhone(input1)
        email = normalizeEmail(input2)

    return email, phone

def normalizeEmail(email):
    return email[2:]

def normalizePhone(phone):
    return phone[2:]


while (True):
    try:
        a = input()
        if a[0] == "E":
            masked_email = maskEmail(a[2:])
            print ("E:" + masked_email)

        elif a[0] == "P":
            masked_phone = maskPhone(a[2:])
            print("P:" + masked_phone)
    except:
        break