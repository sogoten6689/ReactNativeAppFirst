import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ViewContainer} from '@src/components';
import {HomePageModel} from '@src/core/models/homepage/home.model';
import {ArticleModel} from '@src/core/models/article/article.model';
interface ComponentProps {
  landingPageSubject: HomePageModel;
  isModalVisible: boolean;
  toggleModal: () => void;
  setPopupArticle: (slug?: string) => void;
  onNavigateToArticle: (
    slug: string | undefined,
    articleHeader?: number,
  ) => void;
  onOpenLeftMenu: () => void;
  articleDetail: ArticleModel;
  onMenuNavigate: (navigationKey?: string, slug?: string) => void;
  onChangeLanguage: () => void;
}

export type HomeProps = ComponentProps;

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <ViewContainer>
      <Text style={styles.title}>{'hello'}</Text>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
});
