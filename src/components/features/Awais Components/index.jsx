import React from "react";
import "./styles.css";

const AwaisComponent = () => {
  return (
    <div className="swimlaneContainer" id="about">
      {/* Meet IntelliSense */}
      <div id="meet-intellisense" className="swimlane">
        <div className="row">
          <div className="col-sm-4">
            <img
              src="src/assets/SectionFour/home-intellisense.svg"
              alt="Intellisense"
              className="screenshot"
            />
          </div>
          <div className="col-sm-7 col-sm-push-1">
            <h2>Meet IntelliSense.</h2>
            <p>
              Go beyond syntax highlighting and autocomplete with IntelliSense,
              which provides smart completions based on variable types, function
              definitions, and imported modules.
            </p>
          </div>
        </div>
      </div>

      {/* Powerful Debugging */}
      <div id="powerful-debugging" className="swimlane">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-push-8">
              <img
                src="src/assets/SectionFive/homedebugger.svg"
                alt="Debugging"
                className="screenshot"
              />
            </div>
            <div className="col-sm-7 col-sm-pull-4">
              <h2>Print statement debugging is a thing of the past.</h2>
              <p>
                Debug code right from the editor. Launch or attach to your
                running apps and debug with breakpoints, call stacks, and an
                interactive console.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="built-in-git" class="swimlane">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <img
                src="/src/assets/Awais Component/home-git.svg"
                alt="Git"
                class="screenshot"
              />
            </div>
            <div class="col-sm-7 col-sm-push-1">
              <h2>Git commands built-in.</h2>
              <p>
                Working with Git and other SCM providers has never been easier.
                Review diffs, stage files, and make commits right from the
                editor. Push and pull from any hosted SCM service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="hundreds-of-extensions" class="swimlane hundreds-extensions">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-sm-push-8">
              <a
                id="home-marketplace-link"
                href="https://marketplace.visualstudio.com/VSCode"
                target="_blank"
              >
                <img
                  src="/src/assets/Awais Component/Hundreds-of-Extensions.png"
                  class="hundreds-extensions-img"
                  alt="Easily use extensions in VS Code"
                />
              </a>
            </div>
            <div class="col-sm-7 col-sm-pull-4">
              <h2>Extensible and customizable.</h2>
              <p>
                Want even more features? Install extensions to add new
                languages, themes, debuggers, and to connect to additional
                services. Extensions run in separate processes, ensuring they
                won't slow down your editor.{" "}
                <a
                  id="home-extension-marketplace-doc-link"
                  href="/docs/editor/extension-marketplace"
                >
                  Learn more about extensions.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="deploy" class="swimlane">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <img
                src="/src/assets/Awais Component/home-azure.svg"
                alt="Git"
                class="screenshot"
              />
            </div>
            <div class="col-sm-7 col-sm-push-1">
              <h2>Deploy with confidence and ease</h2>
              <p>
                With <a href="https://azure.microsoft.com">Microsoft Azure</a>{" "}
                you can deploy and host your React, Angular, Vue, Node, Python
                (and more!) sites, store and query relational and document based
                data, and scale with serverless computing, all with ease,{" "}
                <a href="https://code.visualstudio.com/docs/azure/extensions">
                  all from within VS Code
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwaisComponent;
