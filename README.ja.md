# EKKA's

EKKA'sは、日本北陸地方（富山県、石川県、福井県）のNet Promoter Score（NPS）やその他の主要指標を可視化するオープンソースの観光ダッシュボードです。未来志向のサイバーパンク風インターフェースと、AI生成画像による属性データの表現が特徴です。

## デモ

[**EKKA's 観光NPSダッシュボード**](https://code4fukui.github.io/ekkas/)

## 機能

- **NPSの時系列表示:** 観光客の満足度（NPS）の推移を時系列で可視化します。
- **観光スポットランキング:** 各観光スポットの人気ランキングを表示します。
- **属性別分析:** 年齢や性別などの属性別に訪問者の満足度を分析し、AI生成の顔アイコンで表現します。
- **地域比較:** 北陸3県の主要な観光指標を比較します。
- **VRビュー:** A-Frameを活用した実験的なVRダッシュボードビューを含みます。

## ローカルでの開発

### 前提条件

- [Deno](https://deno.land/) ランタイム
- 顔アイコン生成用のOpenAI APIキー

### セットアップと使用方法

1. **リポジトリのクローン:**
    ```bash
    git clone https://github.com/code4fukui/ekkas.git
    cd ekkas
    ```

2. **環境変数の設定:**
    プロジェクトのルートディレクトリに `.env` ファイルを作成し、OpenAI APIキーを追加します:
    ```
    OPENAI_API_KEY="sk-..."
    ```

3. **顔アイコンの生成（任意）:**
    ダッシュボードでは、AIが生成した画像を使用して属性セグメントを可視化しています。これらの画像を自分で生成するには、以下のコマンドを実行します:
    ```bash
    deno run --allow-net --allow-read --allow-write genImageFace.js
    ```

4. **ダッシュボードの表示:**
    `index.html` をウェブブラウザで開きます。正しく表示させるには、ローカルウェブサーバーを使用してプロジェクトディレクトリをホストすることをお勧めします。

## データソース

本プロジェクトは「北陸インバウンド観光オープンデータハッカソン2025」の一環として開発されました。以下のリポジトリのオープンデータを活用しています:

- [code4fukui/opendata-hokuriku](https://github.com/code4fukui/opendata-hokuriku)
- [hokuriku-inbound-kanko/opendata](https://github.com/hokuriku-inbound-kanko/opendata)

## ライセンス

MIT License
