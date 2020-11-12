'''Fire'''
import math
import sympy

def print_menu():
    print('1. Hw')
    print('2. Hd')

def H_W():
     current_temp = float(input('enter temp : '))
     H_w = 212 - current_temp

print ('Hw is str('H_w')


def H_D():
    ignition_temp = float(input('enter ignition item :'))
    H_d = ignition_temp - current_temp

print ('Hd is str('H_d')


if __name__ == ' __main__':
    print_menu()
    choice = input('what equation would you like to do?')
    if choice == '1':
        H_W()

    if choice =='2':
        H_D()
    

