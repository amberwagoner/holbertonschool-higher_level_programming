#!/usr/bin/python3
""" Function that writes a string to text file """


def write_file(filename="", text=""):
    """ Write a string to a text file """

    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
