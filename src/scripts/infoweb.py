import requests
import argparse
import json

parser = argparse.ArgumentParser(description="Detector de web")
parser.add_argument('-t', '--target', help="Objetivo")
parser = parser.parse_args()

def main():
    if parser.target:
        try:
            url = requests.get(url=parser.target)
            web = dict(url.headers)
            
            json_output = json.dumps(web, indent=4)
            
            print("Información obtenida de la web:")
            print(json_output)

            print(json_output)

        except Exception as e:
            print("No se logró llegar al objetivo")
            print(f"Error: {str(e)}")
    else:
        print("No se encuentra objetivo")

if __name__ == '__main__':
    main()
