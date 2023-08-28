
        """
                
        raw_data = soup

        cleaned_article_content = raw_data

                    # For Strings
        parser = PlaintextParser.from_string(cleaned_article_content,Tokenizer("english"))

        summarizer = LexRankSummarizer()
                #Summarize the document with 2 sentences
        summary = summarizer(parser.document, 3)

        for st in summary:
            fst += ((str(st).split("<Sentence:")[0])).capitalize()

        fst = fst.replace(".", ". ").replace("?", "? ").replace("!", "! ")

        """