if ('webkitSpeechRecognition' in window) {
                  const recognition = new webkitSpeechRecognition();
                        const outputDiv = document.getElementById('output');
                              const startButton = document.getElementById('startButton');

                                    startButton.addEventListener('click', () => {
                                            recognition.start();
                                                    startButton.disabled = true; // ボタンを無効化して連続クリックを防止
                                                          });

                                                                recognition.onstart = () => {
                                                                        console.log("音声認識が始まりました。");
                                                                              };

                                                                                    recognition.onend = () => {
                                                                                            console.log("音声認識が終了しました。再度開始します。");
                                                                                                    startButton.disabled = false; // ボタンを有効化
                                                                                                            recognition.start();
                                                                                                                  };

                                                                                                                        recognition.onresult = (event) => {
                                                                                                                                const result = event.results[event.resultIndex][0].transcript;
                                                                                                                                        console.log("認識結果:", result);
                                                                                                                                                outputDiv.textContent = result;
                                                                                                                                                      };
                                                                                                                                                          } else {
                                                                                                                                                                console.log("このブラウザはWeb Speech APIをサポートしていません。");
                                                                                                                                                                    }