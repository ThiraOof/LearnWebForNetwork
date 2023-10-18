import json
import sys

def get_telnet():
    nodePort1 = sys.argv[1]
    nodePort2 = sys.argv[2]
    print(nodePort1, nodePort2)

    import telnetlib
    tn = telnetlib.Telnet("52.64.186.140", nodePort1)

    tn.write(b"ping 10.0.0.2\n")

    calculatedResults = tn.read_until(b"PC1>").decode('ascii')
    tn.close()

    json_object_result = json.dumps(calculatedResults, indent=4)
    print(json_object_result)
get_telnet()

sys.stdout.flush()
