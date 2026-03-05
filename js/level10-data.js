const LEVEL10_DATA = {
    id: 10,
    title: "動物実験の倫理と3Rs",
    icon: "🤝",
    description: "Replacement、Reduction、Refinement、動物福祉基準",
    modules: [
        {
            id: 1001,
            title: "動物実験の倫理と3Rs原則",
            duration: "15分",
            content: `
<h2>責任ある動物実験 ― 3Rs原則と動物福祉</h2>

<p>新日本科学のビジネスの中核には動物を用いた非臨床試験があります。だからこそ、同社は<strong>動物福祉</strong>に対して高い倫理意識を持ち、国際的な基準に基づく動物管理体制を構築しています。動物実験の倫理的枠組みの基本となるのが<strong>3Rs原則</strong>です。</p>

<h3>3Rs原則とは</h3>
<p>3Rs原則は、1959年にイギリスの科学者ウィリアム・ラッセル（William Russell）とレックス・バーチ（Rex Burch）が著書「The Principles of Humane Experimental Technique」で提唱した動物実験の倫理原則です。</p>

<table>
<tr><th>原則</th><th>英語</th><th>意味</th><th>具体例</th></tr>
<tr><td>代替</td><td>Replacement</td><td>動物を使わない方法への置き換え</td><td>in vitro試験、コンピュータシミュレーション、オルガノイド</td></tr>
<tr><td>削減</td><td>Reduction</td><td>使用動物数の最小化</td><td>統計的に最適な群数・頭数の設計、過去のデータの活用</td></tr>
<tr><td>改善</td><td>Refinement</td><td>動物の苦痛の軽減</td><td>適切な麻酔・鎮痛、環境エンリッチメント、人道的エンドポイント</td></tr>
</table>

<h3>Replacement（代替）</h3>
<p>動物を用いない代替法の開発と活用は、3Rsの中でも最も根本的な原則です。完全な代替が困難な場合でも、部分的な代替（例：予備的なスクリーニングをin vitroで行い、動物実験は最終確認のみとする）が推奨されます。</p>
<ul>
<li><strong>in vitro試験</strong>：細胞培養系を用いた毒性スクリーニング（例：Ames試験、染色体異常試験）</li>
<li><strong>コンピュータモデル</strong>：QSAR（定量的構造活性相関）やPBPKモデルによる毒性予測</li>
<li><strong>オルガノイド・MPS</strong>：臓器チップ（Organ-on-a-Chip）による臓器機能の再現</li>
<li><strong>ヒト由来組織</strong>：ヒト肝細胞を用いた代謝試験</li>
</ul>

<h3>Reduction（削減）</h3>
<p>統計学的に有意な結果を得るために必要な最小限の動物数を科学的に算出し、使用数を最適化します。</p>
<ul>
<li><strong>適切な試験デザイン</strong>：統計的検出力分析に基づく群数・頭数の設定</li>
<li><strong>データの共有と再利用</strong>：過去の試験データや文献データの有効活用</li>
<li><strong>パイロットスタディ</strong>：本試験前の予備試験で用量設定を最適化</li>
<li><strong>マイクロドージング</strong>：極微量投与によるヒト初回投与前のPK評価</li>
</ul>

<h3>Refinement（改善）</h3>
<p>動物実験が不可避な場合、動物が経験する苦痛やストレスを可能な限り軽減するための措置です。</p>
<ul>
<li><strong>環境エンリッチメント</strong>：おもちゃ、パズルフィーダー、社会的交流の機会の提供</li>
<li><strong>適切な麻酔・鎮痛</strong>：侵襲的処置における痛みの管理</li>
<li><strong>人道的エンドポイント</strong>：過度の苦痛が予見される場合の早期安楽死基準の設定</li>
<li><strong>非侵襲的モニタリング</strong>：テレメトリー等による無拘束下でのデータ収集</li>
<li><strong>トレーニング</strong>：動物のハンドリング訓練によるストレス軽減</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">IACUC（動物実験委員会）</div>
<p>新日本科学では、IACUC（Institutional Animal Care and Use Committee：施設内動物実験委員会）を設置し、すべての動物実験計画の事前審査を行っています。IACUCは獣医師、科学者、外部委員を含む多職種で構成され、3Rsの原則に基づいて動物使用の妥当性、苦痛の軽減策、代替法の検討状況などを審査します。承認を受けない限り動物実験は開始できません。</p>
</div>

<h3>国際的な動物福祉基準</h3>
<p>新日本科学は、以下の国際基準・認証に基づいて動物管理を行っています。</p>
<table>
<tr><th>基準・認証</th><th>内容</th></tr>
<tr><td>AAALAC International</td><td>国際実験動物ケア評価認証協会による施設認証</td></tr>
<tr><td>動物愛護管理法（日本）</td><td>日本国内の動物愛護に関する法律</td></tr>
<tr><td>AWA（米国）</td><td>米国動物福祉法（Animal Welfare Act）</td></tr>
<tr><td>PHS Policy（米国）</td><td>米国公衆衛生局の実験動物ケアに関する方針</td></tr>
</table>

<p>特に<strong>AAALAC International</strong>の認証は、動物のケアと使用に関する国際的なゴールドスタンダードとされており、この認証を取得していることは、新日本科学の動物福祉に対する取り組みの高さを証明しています。</p>
`,
            quiz: [
                { id: "q1001_1", type: "choice", question: "3Rs原則のうち「Reduction」が意味するものはどれですか？", options: ["動物を使わない方法への置き換え", "使用動物数の最小化", "動物の苦痛の軽減", "動物実験の完全廃止"], answer: 1, explanation: "Reduction（削減）は使用動物数の最小化を意味します。統計的に必要な最小限の動物数を科学的に算出し、使用数を最適化します。" },
                { id: "q1001_2", type: "choice", question: "動物のケアと使用に関する国際的なゴールドスタンダードとされる認証はどれですか？", options: ["ISO 9001", "AAALAC International", "GLP認証", "FDA承認"], answer: 1, explanation: "AAALAC International（国際実験動物ケア評価認証協会）の認証は、動物のケアと使用に関する国際的なゴールドスタンダードとされています。" },
                { id: "q1001_3", type: "choice", question: "3Rs原則の「Refinement」に該当する取り組みはどれですか？", options: ["コンピュータシミュレーションによる代替", "統計的に最適な動物数の設計", "環境エンリッチメントや適切な麻酔による苦痛の軽減", "試験の中止"], answer: 2, explanation: "Refinement（改善）は動物の苦痛やストレスを軽減するための措置で、環境エンリッチメント、適切な麻酔・鎮痛、人道的エンドポイントの設定などが含まれます。" }
            ]
        }
    ]
};
