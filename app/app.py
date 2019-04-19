from flask import Flask, render_template

app = Flask(__name__, static_folder="../build/static", template_folder="../build")


@app.route("/")
def hello():
    return render_template('index.html')


def detect_mobile(request):
    browser = request.user_agent.browser
    version = request.user_agent.version and int(request.user_agent.version.split('.')[0])
    platform = request.user_agent.platform

    if browser and version:
        if ((browser == 'msie' and version < 9) or
                (browser == 'firefox' and version < 4)
                or (platform == 'android' and browser == 'safari' and version < 534)
                or (platform == 'iphone' and browser == 'safari' and version < 7000)):
            return render_template('unsupported.html')