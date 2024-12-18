from flask import Flask
import random

app = Flask(__name__)

quotes = [
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
    "When you change your thoughts, remember to also change your world.",
    "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together."
]


@app.route('/quote', methods=['GET'])
def get_quote():
    return {"quote": random.choice(quotes)}

if __name__ == '__main__':
    app.run(debug=True)
