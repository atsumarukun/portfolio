function AboutWindowBodyComponent() {
  return `
    <div class="bl_aboutWindowBody">
        <div class="ly_aboutWindowBodyProfile bl_aboutWindowBodyProfile">
            <img class="ly_aboutWindowBodyProfileIcon bl_aboutWindowBodyProfileIcon" src="./public/icon.png" />
            <p>あつまるくん</p>
        </div>
        <div class="ly_aboutWindowBodyDescription bl_aboutWindowBodyDescription">
            <div class="bl_aboutWindowBodyDescriptionContent">
                <p class="bl_aboutWindowBodyDescriptionContentTitle">職業:</p>
                <p>学生, インターン生</p>
            </div>
            <div class="bl_aboutWindowBodyDescriptionContent">
                <p class="bl_aboutWindowBodyDescriptionContentTitle">趣味:</p>
                <p>プログラミング, コンピュータに触れること</p>
            </div>
            <div class="bl_aboutWindowBodyDescriptionContent">
                <p class="bl_aboutWindowBodyDescriptionContentTitle">注力:</p>
                <p>OS開発, 個人用Server運用</p>
            </div>
            <div class="bl_aboutWindowBodyDescriptionContent">
                <p class="bl_aboutWindowBodyDescriptionContentTitle">言語:</p>
                <p>
                    HTML/CSS<br />
                    JavaScript(Node.js, React, Next.js, Nest.js)(実務経験有)<br />
                    Python(Django, TensorFlow, Keras)<br />
                    PHP(Laravel)(実務経験有)<br />
                    C/C++<br />
                    Go, Rust(学習中)
                </p>
            </div>
            <div class="bl_aboutWindowBodyDescriptionContent">
                <p class="bl_aboutWindowBodyDescriptionContentTitle">技術:</p>
                <p>
                    Docker(実務経験有)<br />
                    Git(GitHub)(実務経験有)<br />
                    AWS(学習中/実務経験有)
                </p>
            </div>
            <div class="bl_aboutWindowBodyDescriptionContent">
                <p class="bl_aboutWindowBodyDescriptionContentTitle">開発:</p>
                <p>
                    GoogleFormからのデータをKintoneに保存するシステム(案件)<br />
                    住所から避難経路やハザードマップをPDF出力するシステム(案件)<br />
                    仮想通貨を自動売買するシステム(案件)<br />
                    ECサービス(インターン/運用)<br />
                    作品管理サービス(インターン/新規開発)
                </p>
            </div>
        </div>
    </div>
`;
}
